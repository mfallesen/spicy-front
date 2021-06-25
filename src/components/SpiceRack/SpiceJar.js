import { Grid, Avatar, Typography } from '@material-ui/core'
import React from 'react'
var dayjs = require('dayjs')

export default function SpiceJar(props) {
    // the addition of the 01/ is to create a date string recognized by dayjs
    const expireDate = '01/' + props.expires
    // simple check to see if spice is expired
    const currentDate = dayjs().isAfter(dayjs(expireDate).format('DD/MM/YYYY'));
    const expired = currentDate ? 'expired': '';

    return (
        <Grid item justify='center' alignContent='center' className={`spiceJar ${expired}`}>
            {/* <Avatar className='avatar-adjust' align='center' variant='rounded'>{props.name.slice(0,1)}</Avatar> */}
            <Typography variant='h6' className='spiceName' align='center'>{props.name}</Typography>
            <Typography className='spiceBrand' align='center'>{props.brand}</Typography>
            <Typography className='spicePurchase' align='center'>Purchased:</Typography>
            <Typography className='spicePurchase' align='center'>{props.purchaseDate}</Typography>
            <Typography className={`spiceExpire `} align='center'>Best Before:</Typography>
            <Typography className={`spiceExpire `} align='center'>{props.expires}</Typography>
        </Grid>
    )
}
