import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class ListScreen extends React.Component {
    static navigationOptions = {
        title: "Historique"
    };

    render() {
        const { navigate } = this.props.navigation;
        console.log("histo");
        console.log(this.props.books);
        return (
            <View style={styles.container}>
                {this.props.book &&
                    this.props.book.map(item => {
                        return (
                            <Text
                                onPress={() =>
                                    navigate("Book", {
                                        book: item
                                    })
                                }
                                style={styles.item}
                            >
                                {item.title}
                            </Text>
                        );
                    })}
                <FlatList
                    data={this.props.books}
                    renderItem={({ item }) => (
                        <Text
                            onPress={() => navigate("Book", { book: item })}
                            style={styles.item}
                        >
                            {item.title}
                        </Text>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
});

const mapStateToProps = state => {
    console.log("state :: ", state);
    return {
        books: state.bookReducers.books
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListScreen);
