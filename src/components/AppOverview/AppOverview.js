import { Grid, Paper, Typography, Button, InputLabel } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { open } from '../../utils/actions/openLoginModal'
import './AppOverview.css'



export default function AppOverview() {

    const dispatch = useDispatch();

    const routeToSignUp = () => {
        window.location.href = "/signup"
    }

    return (
        <Paper>
            <Grid container className={'landing-call-to-action'} justify='center' alignContent='center' >
                <Grid item xs={8} >

                    <Typography>Keeping up with what you've got in your Spice Cabinet at home isn't always easy and its easy to forget to buy or buy extra of something you already have. As an avid home cook myself I wanted to find a way to change that and so I decided to create Krydda. Now instead of going through my home spice cabinet every time I think I need something I can just check the app. It really is that simple.</Typography>
                </Grid>
                <Grid item xs={8} className={'landing-call-to-action'} container direction='column' alignItems='center' justify='center'>
                    <Typography>Its easy to get started. Sign up for a free account. </Typography>
                    <Button className={'landing-btn'} onClick={routeToSignUp} id='landingSignIn'>Sign Up</Button>
                    <InputLabel htmlFor="landingSignIn">Already have an Account? <Link to={'/'} onClick={() => dispatch(open())}>Sign In</Link> </InputLabel>
                </Grid>
                
            </Grid>
        </Paper>
    )
}
