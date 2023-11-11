const LOCALHOST = "http://localhost:5173/"
const PROD = "https://todoauth11.vercel.app/"
const URL = `${PROD}`;

const LOGIN = () => URL + 'api/login';
const SIGNUP =  URL + 'api/sign-up';
const ADD_TODO = URL + 'api/add-todo';
const DELETE_TODO = URL + 'api/delete-todo';
const EDIT_TODO = URL + 'api/edit-todo';
const GET_TODO = URL + 'api/get-todo';


export { LOGIN, SIGNUP, ADD_TODO, DELETE_TODO, EDIT_TODO, GET_TODO }