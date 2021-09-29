import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import { React, useState } from 'react'
import API from '../../utils/API';



const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    }
}))

export default function SignUp() {

    const classes = useStyles()

    // SignUpFormState
    const [signUpFormState, setSignUpFormState] = useState({
        username: '',
        password: '',
        email: '',
        name: '',
        passwordConfirm: ''
    })

    // Input Change Tracker
    const inputChangeRegister = event => {
        const { name, value } = event.target;
        setSignUpFormState({
            ...signUpFormState,
            [name]: value
        })
    }

    // Validate entries then Register user with product and log them into their account
    // Validation
    let userNameRegEx = /^[a-z ,.'-,0-9]+$/i
    let nameRegEx = /^[a-z ,.'-]+$/i
    let emailRegex = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z{|}~])*@[a-zA-Z](-?[a-zA-Z0-9])*(\.[a-zA-Z](-?[a-zA-Z0-9])*)+$/
    let passwordRegex = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~]+$/i


    // Verify functions
    const verifyUsername = (form) => {
        if (!userNameRegEx.test(form.username)) {
            throw 'Invalid Username'
        }
    }

    const verifyName = ({ name }) => {
        if (!nameRegEx.test(name)) {
            throw 'Invalid Name'
        }
    }

    const verifyEmail = ({ email }) => {
        if (!emailRegex.test(email)) {
            throw 'Invalid Email';
        }

    }

    const verifyPassword = ({ password }) => {


        if (!passwordRegex.test(password)) {
            throw 'Invalid Password';
        }
    }

    const verifyPasswordConfirm = (form) => {


        if (form.password !== form.passwordConfirm || !passwordRegex.test(form.passwordConfirm)) {
            throw 'Passwords do not match'
        }
    }

    const handleUserRegistration = event => {
        event.preventDefault();

        try {

            verifyName(signUpFormState)
            verifyUsername(signUpFormState)
            verifyEmail(signUpFormState);
            verifyPassword(signUpFormState);
            verifyPasswordConfirm(signUpFormState);
            console.log("made it through");

        } catch (err) {
            switch (err) {
                case 'Invalid Name':
                    console.error(err, 'we got it')
                    break;
                case 'Invalid Email':
                    console.error(err, 'we got it')
                    break;
                case 'Invalid Password':
                    console.error(err, 'we got it')
                    break;
                case 'Passwords do not match':
                    console.error(err, 'we got it')
                    break;
                case 'Invalid Username':
                    console.error(err, 'we got it')
                    break;
                default:
                    console.log(err, ' Unknown error');
            }
            console.error(err, 'we got it outside')

        }


        // API.registerUser(signUpFormState).then(userData => {
        //     console.log("USER DATA:", userData);


        //     // Validate input before logging them in
        //     // try {
        //     //   API.login(userData).then(loginData => {

        //     //   })

        //     // } catch (e) {
        //     //   console.error(e)
        //     // }

        //     window.location.href = '/'
        // })
    }

    return (

        <Container>
            <Grid container justify='center' direction='column' alignItems='center'>
                <Typography component='h2'> Ready to take control of your Spicy Life?</Typography>
                {/* NoValidate only for development and testing */}
                <form onSubmit={handleUserRegistration} noValidate>
                    <Grid container spacing={3} justify='center' >

                        <Grid item >
                            <TextField
                                className={classes.inputbox}
                                required
                                variant='outlined'
                                name='name'
                                label='First Name:'
                                placeholder='First Name:'
                                onChange={inputChangeRegister}
                                value={signUpFormState.name}
                            />

                            <TextField
                                className={classes.inputbox}
                                required
                                variant='outlined'
                                name='username'
                                label='Desired User Name:'
                                placeholder='Witty Username Here:'
                                onChange={inputChangeRegister}
                                value={signUpFormState.username}
                            />
                            <TextField
                                className={classes.inputbox}
                                required
                                variant='outlined'
                                name='email'
                                label='Email Address:'
                                placeholder='Email:'
                                onChange={inputChangeRegister}
                                value={signUpFormState.email}
                            />
                        </Grid>
                        <Grid item >
                            <TextField
                                className={classes.inputbox}
                                required
                                variant='outlined'
                                name='password'
                                label='Password:'
                                placeholder='Enter Password:'
                                onChange={inputChangeRegister}
                                value={signUpFormState.password}
                            />
                            <TextField
                                className={classes.inputbox}
                                required
                                variant='outlined'
                                name='passwordConfirm'
                                label='Confirm Password:'
                                placeholder='Confirm Password:'
                                helperText='Passwords Must Match'
                                onChange={inputChangeRegister}
                                value={signUpFormState.passwordConfirm}
                            />

                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        variant='contained'
                        color='primary'
                        value='register'
                    >
                        Sign Up
                    </Button>
                </form>
                <Button variant='contained' color='primary' value='home' onClick={() => { window.location.href = '/' }}>Go Back</Button>
            </Grid>

        </Container>

    )
}
