import { Container, Grid, makeStyles, TextField, Typography, Button, IconButton } from '@material-ui/core'
import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import './SignIn.css'


const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    icon: {
        marginLeft: '95%',
        marginTop: '-15px'
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
                <IconButton className={classes.icon} onClick={handleClose}>
                <CancelIcon  htmlColor='red' />
                </IconButton>

            <Grid container justify='center' direction='column' alignItems='center'>
                <Typography component='h2'> </Typography>
                {/* NoValidate only for development and testing */}
                <form noValidate>
                    <Grid container spacing={3} justify='center' direction='column'>

                        <Grid item spacing={3}>
                        <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='username'
                                label='User Name:'
                                placeholder='Username'
                                onChange={props.inputChange}
                                value={props.form.username}
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='password'
                                label='Password:'
                                placeholder='Password'
                                onChange={props.inputChange}
                                value={props.form.password}
                            />
                            

                        </Grid>
                        <Grid item justify='right' alignItems='right'  spacing={3}>
                            <Button variant='contained' color="primary" onClick={props.handleUserLogin}>Log In</Button>
                            <Button variant='contained' color="primary" onClick={handleSignUp}>Sign Me Up</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Container>

    )
}