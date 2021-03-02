import { Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    }
}))

export default function SignUp() {

    const classes = useStyles()
    return (

        <Container>
            <Grid container justify='center' direction='column' alignItems='center'>
                <Typography component='h2'> Ready to take control of your Spicy Life?</Typography>
                {/* NoValidate only for development and testing */}
                <from noValidate>
                    <Grid container spacing={3} justify='center' direction='column'>

                        <Grid item spacing={3}>

                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='name'
                                label='Desired User Name:'
                                placeholder='Witty Username Here:'
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='email'
                                label='Email Address:'
                                placeholder='Email:'
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
                            />
                            <TextField
                            className={classes.inputbox}
                                required
                                variant='outlined'
                                name='passwordConfirm'
                                label='Confirm Password:'
                                placeholder='Confirm Password:'
                                helperText='Passwords Must Match'
                            />

                        </Grid>
                    </Grid>
                </from>
            </Grid>

        </Container>

    )
}
