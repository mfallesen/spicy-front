import { Paper, Grid } from '@material-ui/core'
import React from 'react'
import SpiceJar from './SpiceJar'

export default function SpiceRack() {
    return (
        <Paper>
            <Grid container spacing={2}>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
                <SpiceJar/>
            </Grid>
        </Paper>
    )
}
