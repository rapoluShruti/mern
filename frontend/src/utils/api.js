import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5555/books" });

export const getBooks = () => API.get("/");
export const getBookById = (id) => API.get(`/${id}`);
export const createBook = (bookData) => API.post("/", bookData);
export const updateBook = (id, bookData) => API.put(`/${id}`, bookData);
export const deleteBook = (id) => API.delete(`/${id}`);
