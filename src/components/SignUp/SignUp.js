import { Button, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    }
}))

export default function SignUp(props) {

    const classes = useStyles()
    return (

        <Container>
            <Grid container justify='center' direction='column' alignItems='center'>
                <Typography component='h2'> Ready to take control of your Spicy Life?</Typography>
                {/* NoValidate only for development and testing */}
                <form onSubmit={props.onSubmit} noValidate>
                    <Grid container spacing={3} justify='center' direction='column'>

                        <Grid item spacing={3}>
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='name'
                                label='First Name:'
                                placeholder='First Name:'
                                onChange={props.inputChange}
                                value={props.form.name}
                            />

                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='username'
                                label='Desired User Name:'
                                placeholder='Witty Username Here:'
                                onChange={props.inputChange}
                                value={props.form.username}
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='email'
                                label='Email Address:'
                                placeholder='Email:'
                                onChange={props.inputChange}
                                value={props.form.email}
                            />
                        </Grid>
                        <Grid item spacing={3}>
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='password'
                                label='Password:'
                                placeholder='Enter Password:'
                                onChange={props.inputChange}
                                value={props.form.password}
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='passwordConfirm'
                                label='Confirm Password:'
                                placeholder='Confirm Password:'
                                helperText='Passwords Must Match'
                                onChange={props.inputChange}
                                value={props.form.passwordConfirm}
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
            </Grid>

        </Container>

    )
}
