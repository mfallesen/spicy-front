import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import SpiceJar from './SpiceJar'
import AddSpice from './AddSpice'
import './SpiceRack.css'


// TESTING ONLY 
const testRackObj = {
    spice1: {
        name: 'Cumin',
        brand: `Badia`,
        purchaseDate: `01/2020`,
        expires: `12/2024`
    },
    spice2: {
        name: `Oregano`,
        brand: `McCormick`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice3: {
        name: `Curry`,
        brand: `McCormick`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice4: {
        name: `Oregano`,
        brand: `Badia`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice5: {
        name: `Thyme`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice6: {
        name: `Pepper`,
        brand: `McCormick`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice7: {
        name: `Salt`,
        brand: `McCormick`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice8: {
        name: `Rosemary`,
        brand: `McCormick`,
        purchaseDate: `01/2020`,
        expires: `03/2025`
    },
    spice9: {
        name: `Garlic Salt`,
        brand: `Badia`,
        purchaseDate: `06/2017`,
        expires: `02/2021`
    }
}
// TESTING ONLY ^^^^

//  Assign Username
let username = localStorage.getItem('USERNAME')

let existingSpice = false;

let userSpiceArr = JSON.parse(localStorage.getItem('Spices'))

if (!userSpiceArr) {
    existingSpice = false;
} else {
    existingSpice = true
}
console.log(userSpiceArr)



export default function SpiceRack(props) {
    return (
        <div className='spiceRack'>
            <Typography variant='h1' align='center'> {username}'s Spice Rack</Typography>
            <Grid container spacing={2} justify='center'>


                {existingSpice
                    ? userSpiceArr.map((spice) => {
                        return <SpiceJar key={spice} name={spice.spice_name} brand={spice.brand} purchaseDate={spice.purchase_date} expires={spice.expiration_date} />
                      })
                    : <Typography>Looks Like you don't have any spices yet!. Lets Change that. </Typography>}
            </Grid>
            <AddSpice/>
        </div>
    )
}
