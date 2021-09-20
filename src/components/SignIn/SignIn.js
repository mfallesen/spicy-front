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

    console.log(props)
    const handleSignUp = () => {
        // Placeholder
        console.log("redirecting to Sign Up Page");
        window.location.href = '/signup'
    }

    // const handleClose = () => {
    //     // Placeholder
    //     console.log("Closing Modal!");
    //     console.log(props)
    //     // console.log(...props)
    //     props.onClose()
    // }

    const classes = useStyles()
    return (

        <Container className={props.classes.signInBG}>
                <IconButton className={classes.icon} onClick={props.close}>
                <CancelIcon  htmlColor='red' />
                </IconButton>

            <Grid container justify='center' direction='column' >
                <Typography component='h2'> </Typography>
                {/* NoValidate only for development and testing */}
                <form noValidate>
                    <Grid container spacing={3} justify='center' direction='column'>

                        <Grid item >
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
                        <Grid item >
                            <Button variant='contained' color="primary" onClick={props.handleUserLogin}>Log In</Button>
                            <Button variant='contained' color="primary" onClick={handleSignUp}>Sign Me Up</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

        </Container>

    )
}