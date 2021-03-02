import { Grid, makeStyles, Paper, Typography, Button, InputLabel } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    testbg: {
        backgroundColor: 'salmon'
// THIS NEEDS TO BE REMOVED WHEN STYLING
    },
    overview: {
        padding: '24px'
    }
})

export default function AppOverview() {
    const classes = useStyles();
    return (
        <Paper>
            <Grid container justify='center' alignContent='center' direction='column'>
                <Grid item xs={8} className={classes.testbg, classes.overview} >

                    <Typography>Keeping up with what you've got in your Spice Cabinet at home isn't always easy and its easy to forget to buy or buy extra of something you already have. As an avid home cook myself I wanted to find a way to change that and so I decided to create Krydda. Now instead of going through my home spice cabinet every time I think I need something I can just check the app. It really is that simple.</Typography>
                </Grid>
                <Grid item xs={8} className={classes.overview} container direction='column' alignItems='center' justify='center'>
                    <Typography>Its easy to get started. Sign up for a free account. </Typography>
                    <Button id='landingSignIn' className={classes.testbg}>Sign Up</Button>
                    <InputLabel htmlFor="landingSignIn">Already have an Account? Sign In</InputLabel>
                </Grid>
                
            </Grid>
        </Paper>
    )
}
