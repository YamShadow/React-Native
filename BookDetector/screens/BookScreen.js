import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";

class BookScreen extends React.Component {
    static navigationOptions = {
        title: "Book"
    };

    constructor(props) {
        super(props);
    }

    render() {
        let book = false;
        if (
            this.props.navigation.state.params &&
            this.props.navigation.state.params.book !== undefined
        ) {
            book = this.props.navigation.state.params.book;
        } else if (this.props.bookReducers.books[0] !== undefined) {
            book = this.props.bookReducers.books[0];
        }

        if (book) {
            return (
                <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <View style={{ flex: 0.5, paddingRight: 10 }}>
                            <Image
                                source={{ uri: book.imageLinks.thumbnail }}
                                style={{
                                    flex: 1,
                                    width: undefined,
                                    height: 200
                                }}
                            />
                        </View>
                        <View style={{ flex: 0.5, textAlign: "center" }}>
                            <Text style={styles.title}>{book.title}</Text>
                            <Text>écrit par {book.authors}</Text>
                            <Text>
                                publié le {book.publishedDate} par{" "}
                                {book.publisher}
                            </Text>
                            <Text>{book.pageCount} pages</Text>
                            <Text>Note(s): {book.averageRating}/5</Text>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ paddingBottom: 10 }}>Résumé:</Text>
                            <Text>{book.description}</Text>
                            <Text style={{ fontSize: 9, paddingTop: 5 }}>
                                Numéro ISBN :{" "}
                                {book.industryIdentifiers[1].identifier}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                    <View style={{ paddingTop: 10 }}>
                        <Text> cherche un livre </Text>
                    </View>
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    }
});

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookScreen);
