import { useScrollTrigger } from '@material-ui/core';
import axios from 'axios';
const BASEURL = process.env.REACT_APP_SPICY_API;
const qs = require('qs');
var dayjs = require('dayjs')

const calls = {
    // register user
    registerUser: async function (userData) {
        return await axios.post(BASEURL + '/user/registerUser', userData)
    },

    // Log User In
    login: function (userData) {
        return axios.post(BASEURL + '/user/loginUser', {
            username: userData.username,
            password: userData.password,
        })
    },

    // Get Spices in Users Spice Rack
    getUserSpices: async function (userID) {

        const spiceIds = await axios.post(BASEURL + '/user/findUserSpices', {
            userId: userID,
        })

        let userSpiceRack = [];

        for (let i = 0; i < spiceIds.data.length; i++) {

            const userSPICERACK = await axios.post(BASEURL + '/user/populateSpices', {
                id: spiceIds.data[i],
                userId: userID,
            })

            // let purchase = dayjs(userSPICERACK.data[0].purchase_date).format('MM/YYYY')
            // let expiration_date = dayjs(userSPICERACK.data[0].expiration_date).format('MM/YYYY')

            // userSPICERACK.data[0].purchase_date = purchase;

            // console.log(userSPICERACK)
           
            userSpiceRack.push(userSPICERACK.data[0])
            
        }

        let userSpices = [];

        for (let i = 0; i < spiceIds.data.length; i++) {

            const userSPICES = await axios.post(BASEURL + '/user/findIndividualSpiceInfo', {
                id: spiceIds.data[i],
            })
            
            userSpices.push(userSPICES.data[0])
        }

        let spiceArr = userSpices.map((spice, i) => Object.assign({}, spice, userSpiceRack[i]))

        for (let i = 0; i < spiceArr.length; i++) {
            let purchase = dayjs(spiceArr[i].purchase_date).format('MM/YYYY')
            spiceArr[i].purchase_date = purchase;
            let expiration = dayjs(spiceArr[i].expiration_date).format('MM/YYYY')
            spiceArr[i].expiration_date = expiration
        }

        return spiceArr
    },

    // Add Spice to Database
    addSpice: async function (spiceData) {          
        
        const spiceId = await axios.post(BASEURL + '/user/addSpice', {
            spice_name: spiceData.spicename,
            brand: spiceData.brandname
        })

        localStorage.setItem("spiceAddedId", JSON.stringify(spiceId.data))
 
    },

    // Add Spice to Users Spice Rack
    addSpiceToRack: async function(spiceData, spiceId) {

        console.log(spiceData, spiceId)

        await axios.post(BASEURL + '/user/addSpiceToUserRack',{
            purchase_date: spiceData.purchasedate,
            expiration_date: spiceData.expiredate,
            spiceId: localStorage.getItem('spiceAddedId'),
            userId: localStorage.getItem('userId'),
            spice_name: spiceData.spicename,
            brand: spiceData.brandname
        })

    }

}

export default calls;