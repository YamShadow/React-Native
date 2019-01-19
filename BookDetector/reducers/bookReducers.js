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

    default:
      return state;
  }
};

export default bookReducers;
