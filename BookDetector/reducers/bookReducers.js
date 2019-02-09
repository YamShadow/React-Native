const initialState = {
    lastISBN: "",
    books: []
};

const bookReducers = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case "STORE_ISBN":
            nextState = { ...state };
            nextState.lastISBN = action.isbn;
            return nextState;

        case "STORE_BOOK":
            nextState = { ...state };
            if (
                nextState.books[0] === undefined ||
                action.book.industryIdentifiers[1].identifier !=
                    nextState.books[0].industryIdentifiers[1].identifier
            ) {
                nextState.books.unshift(action.book);
                nextState.books[0].key = nextState.books.length.toString();
            }
            return nextState;

        default:
            return state;
    }
};

export default bookReducers;
