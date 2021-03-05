import { Grid, Avatar, Typography } from '@material-ui/core'
import React from 'react'

export default function SpiceJar(props) {

    console.log(props);

    return (
        <Grid item>
            <Avatar>{props.name.slice(0,1)}</Avatar>
            <Typography>{props.name}</Typography>
            <Typography>{props.brand}</Typography>
            <Typography>{props.purchaseDate}</Typography>
            <Typography>{props.expires}</Typography>
        </Grid>
    )
}
