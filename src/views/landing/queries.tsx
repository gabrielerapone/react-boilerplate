import axios from "axios";
// Endpoint
import { todos_url, users_url } from "../../api/baseUrl";

// Get TODOs list
const getTodos = async () =>
  axios
    .get(todos_url)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    .then(data => data);

// Get user by ID
 const getUserById = async (id: number) =>
   axios
     .get(users_url)
     .then(response => response.data.find((user: any) => user.id === id))
     .catch(error => console.log(error));

export { getTodos, getUserById };
