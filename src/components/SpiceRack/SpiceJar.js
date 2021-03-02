import { Grid, Avatar, Typography } from '@material-ui/core'
import React from 'react'

export default function SpiceJar() {
    return (
        <Grid item>
            <Avatar>C</Avatar>
            <Typography>Name of Spice</Typography>
            <Typography>purchase Date</Typography>
            <Typography>Best By Date</Typography>
        </Grid>
    )
}
