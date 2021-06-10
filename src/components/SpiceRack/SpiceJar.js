import { Grid, Avatar, Typography } from '@material-ui/core'
import React from 'react'
var dayjs = require('dayjs')

export default function SpiceJar(props) {
    const expireDate = props.expires
    // simple check to see if spice is expired
    const currentDate = dayjs().isAfter(expireDate);

    return (
        <Grid item justify='center' alignContent='center' className={currentDate ? 'expired': 'fine'}>
            <Avatar className='avatar-adjust' align='center' variant='rounded'>{props.name.slice(0,1)}</Avatar>
            <Typography align='center'>{props.name}</Typography>
            <Typography align='center'>{props.brand}</Typography>
            <Typography align='center'>Purchased:</Typography>
            <Typography align='center'>{props.purchaseDate}</Typography>
            <Typography align='center'>Best Before:</Typography>
            <Typography align='center'>{props.expires}</Typography>
        </Grid>
    )
}
