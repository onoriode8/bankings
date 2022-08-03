import axios from 'axios';

const instance = axios.create({
    baseURL: "https://testing-a784f-default-rtdb.firebaseio.com/"
});

export default instance;

