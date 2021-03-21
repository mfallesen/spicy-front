import axios from 'axios';
const BASEURL = process.env.REACT_APP_SPICY_API;
const qs = require('qs');

const calls = {
    // register user
    registerUser: async function(userData) {
        console.log('API CALL DATA', userData);
        return await axios.post(BASEURL + '/user/registerUser', userData)
    },

    login: function(userData) {
        return axios.post(BASEURL + '/user/loginUser', {
            username:userData.username,
            password: userData.password,
        })
    },

    getUserSpices: async function(userID) {
        return await axios.post(BASEURL + '/user/findUserSpices', {
            userId: userID,
        })
    },
} 

export default calls;