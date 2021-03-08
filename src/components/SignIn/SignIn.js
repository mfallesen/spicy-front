import { Container, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    }
}))

export default function SignIn(props) {

    const handleLogin = () => {
        // Placeholder
        console.log("Logging In!")
    }

    const handleSignUp = () => {
        // Placeholder
        console.log("redirecting to Sign Up Page");
    }

    const handleClose = () => {
        // Placeholder
        console.log("Closing Modal!");
    }

    const classes = useStyles()
    return (

        <Container className={props.classes.signInBG}>
            <Grid container justify='center' direction='column' alignItems='center'>
                <CancelIcon onClick={handleClose}/>
                <Typography component='h2'> </Typography>
                {/* NoValidate only for development and testing */}
                <from noValidate>
                    <Grid container spacing={3} justify='center' direction='column'>

                        <Grid item spacing={3}>
                        <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='name'
                                label='User Name:'
                                placeholder='Username'
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='password'
                                label='Password:'
                                placeholder='Password'
                            />
                            

                        </Grid>
                        <Grid item justify='right'  spacing={3}>
                            <Button onClick={handleLogin}>Log In</Button>
                            <Button onClick={handleSignUp}>Sign Me Up</Button>
                        </Grid>
                    </Grid>
                </from>
            </Grid>

        </Container>

    )
}