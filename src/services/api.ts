import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const apiJson = axios.create({
  baseURL: "http://localhost:4000/",
});
