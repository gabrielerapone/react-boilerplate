import axios from 'axios';
// Endpoint
import { todos_url, users_url } from "../../api/baseUrl";

// Get TODOs list
const getTodos = async () =>
  axios.get(todos_url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));

// Get user by ID
const getUserById = async (id: number) =>
  axios.get(users_url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error));


export { getTodos, getUserById };
