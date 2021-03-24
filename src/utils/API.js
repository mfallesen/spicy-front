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
       
        const spiceIds = await axios.post(BASEURL + '/user/findUserSpices', {
            userId: userID,
        })

        let userSpiceRack = [];

        for (let i = 0; i < spiceIds.data.length; i++) {

            const userSPICERACK = await axios.post(BASEURL + '/user/populateSpices', {
                id: spiceIds.data[i],
                userId: userID,
            })
            console.log("getting spice rack number#", spiceIds.data[i] );
            
            console.log('========',userSPICERACK);
            userSpiceRack.push(userSPICERACK.data[0])
            console.log('++++++++++', userSpiceRack)
        }

        let userSpices = [];

        for (let i = 0; i < spiceIds.data.length; i++) {

            const userSPICES = await axios.post(BASEURL + '/user/findIndividualSpiceInfo', {
                id: spiceIds.data[i],
            })
            console.log("getting spice", spiceIds.data[i] );
            
            console.log(userSPICES);
            userSpices.push(userSPICES.data[0])
        }
        
        console.log(userSpiceRack)
        console.log(userSpices)

        let spiceArr = userSpices.map((spice, i) => Object.assign({}, spice, userSpiceRack[i] ))

        console.log(spiceArr)

        return spiceArr
    },
} 

export default calls;