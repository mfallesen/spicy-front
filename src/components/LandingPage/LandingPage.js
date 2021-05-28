import { Paper, Container, makeStyles, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core'

import React from 'react'


const useStyles = makeStyles({
    background: {
        paddingTop: '48px',
        backgroundImage:'url(https://res.cloudinary.com/dyn9tmf2i/image/upload/v1611791392/SpiceAppBackgroundMed_gcmiqr.png)',
        backgroundColor: 'grey',
        minHeight:'500px',
        backgroundPosition:'top center',
        backgroundSize:'cover', 
        backgroundRepeat:'no-repeat',
    },
    blurrybg: {
        marginTop: '48px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        minHeight:'200px',
        width:'60%',
    }
    
})

const theme = createMuiTheme({
    typography: {
        h1: {
            // fontSize: 50
            color: '#FFFFFF'
        },
        body1: {
            fontSize: 24,
            color: '#FFFFFF'
        }
    }
})



export default function LandingPage() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>

        <Paper
        className={classes.background}
        >
            <Container
            className={classes.blurrybg}
            >
               <Typography variant="h1" align='center' >Krydda.</Typography>
               <Typography variant='body1' align='center'>Your Virtual Spice Rack</Typography>
            </Container>
        </Paper>
        </ThemeProvider>
    )
}
