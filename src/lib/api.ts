import axios from 'axios';

// export async function fetchTodos() {
//   const response = await axios.get(API_URL);
//   return response.data;
// }

// export async function createTodo(todo: { title: string; completed: boolean }) {
//   const response = await axios.post(API_URL, todo);
//   return response.data;
// }

// export async function updateTodo(id: number, updates: { title?: string; completed?: boolean }) {
//   const response = await axios.put(`${API_URL}/${id}`, updates);
//   return response.data;
// }

// export async function deleteTodo(id: number) {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// }

// const API_URL = 'http://localhost:3000/api/todos';

// export async function fetchTodos() {
//   const response = await axios.get(API_URL);
//   return response.data;
// }

// export async function createTodo(todo: { title: string; completed: boolean }) {
//   const response = await axios.post(API_URL, todo);
//   return response.data;
// }

// export async function updateTodo(id: number, updates: { title?: string; completed?: boolean }) {
//   const response = await axios.put(`${API_URL}/${id}`, updates);
//   return response.data;
// }

// export async function deleteTodo(id: number) {
//   const response = await axios.delete(`${API_URL}/${id}`);
//   return response.data;
// }


const api = axios.create({
  baseURL: 'http://localhost:3000/api/todos',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTodos = () => {
    const res = api.get('/')
    console.log({res}, 'GET TODOS RES')
    return res

};
export const getTodo = (id: string) => api.get(`/${id}`);
export const createTodo = (data: { title: string; completed: boolean }) => api.post('/', data);
export const updateTodo = (id: string, data: { title?: string; completed?: boolean }) => api.put(`/${id}`, data);
export const deleteTodo = (id: string) => api.delete(`/${id}`);



