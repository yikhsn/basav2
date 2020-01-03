import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzg0M2VjNDA0NThhODAwMDQ1ZWE1ZDciLCJpYXQiOjE1NTIxNzI5Njh9.H1if5TeYWXrj8RxGB4xsRcAs0zTK9jBlMEnrI4vWOaI';

const instance = axios.create({
    baseURL: 'https://basa-app.herokuapp.com/api/words/search/',
    headers: { 'x-auth-token': token }
});

export default instance;