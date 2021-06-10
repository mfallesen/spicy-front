import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import SpiceJar from './SpiceJar'
import AddSpice from './AddSpice'
import './SpiceRack.css'


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



export default function SpiceRack() {


    return (
        <div className='spiceRack'>
            <Typography variant='h1' align='center'> {username}'s Spice Rack</Typography>
            <Grid className={'spiceRackGrid'} container spacing={2} justify='center'>


                {existingSpice
                    ? userSpiceArr.map((spice) => {
                        return <SpiceJar key={spice} name={spice.spice_name} brand={spice.brand} purchaseDate={spice.purchase_date} expires={spice.expiration_date} className='spiceJar' />
                      })
                    : <Typography variant='h2'>Looks Like you don't have any spices yet!. Lets Change that. </Typography>}
            </Grid>
            <AddSpice />
        </div>
    )
}
