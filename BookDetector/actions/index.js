import axios from "axios";

export const storeISBN = isbn => ({
  type: "STORE_ISBN",
  isbn: isbn
});
