import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-93443-default-rtdb.firebaseio.com/'
});

export default instance;