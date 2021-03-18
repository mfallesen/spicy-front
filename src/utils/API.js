import axios from 'axios';
const BASEURL = process.env.REACT_APP_SPICY_API;
const qs = require('qs');

const calls = {
    // register user
    registerUser: async function(userData) {
        console.log('API CALL DATA', userData);
        return await axios.post(BASEURL + '/user/registerUser', userData)
    }

} 

export default calls;