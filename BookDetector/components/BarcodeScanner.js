import React from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import "../actions/index";
import { BarCodeScanner, Permissions } from "expo";
import { storeISBN, storeBook } from "../actions/index";
const axios = require("axios");

class BarcodeScanner extends React.Component {
    state = {
        hasCameraPermission: null
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    }

    render = () => {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFill}
                />
            </View>
        );
    };

    handleBarCodeScanned = ({ type, data }) => {
        console.log("ISBN: " + data);
        this.getBook(data);
    };

    getBook = isbn => {
        const { navigate } = this.props.navigation;
        if (isbn !== "") {
            let url =
                "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

            console.log(url);
            axios
                .get(url)
                .then(res => {
                    if (res.data.totalItems) {
                        ToastAndroid.show("Find Book", ToastAndroid.SHORT);
                        let book = res.data.items[0].volumeInfo;
                        if (book !== undefined && book !== "") {
                            this.props.storeBook(book);
                        }
                        navigate("Book", { book: book });
                    } else {
                        ToastAndroid.show("Book not found", ToastAndroid.SHORT);
                    }
                })
                .catch(error => {
                    console.log(error.data);
                    ToastAndroid.show(
                        "A bug appeared nearby !",
                        ToastAndroid.SHORT
                    );
                });
        }
    };
}

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        storeISBN: isbn => {
            dispatch(storeISBN(isbn));
        },
        storeBook: book => {
            dispatch(storeBook(book));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BarcodeScanner);
