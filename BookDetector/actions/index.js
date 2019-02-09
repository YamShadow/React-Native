export const storeISBN = isbn => ({
    type: "STORE_ISBN",
    isbn: isbn
});

export const storeBook = book => ({
    type: "STORE_BOOK",
    book: book
});
