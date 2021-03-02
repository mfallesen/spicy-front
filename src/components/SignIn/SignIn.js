import { Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    inputbox: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    }
}))

export default function SignIn() {

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
                    </Grid>
                </from>
            </Grid>

        </Container>

    )
}