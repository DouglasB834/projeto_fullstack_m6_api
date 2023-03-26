import axios from "axios";

const token: string | null = localStorage.getItem("@phonebook:token");
export const api = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
