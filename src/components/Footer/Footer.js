import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

export default function Footer() {
    return (
        <div>
            <Grid container justify='center' spacing={6}>
                <Grid item>
                    <Typography>Copyright 2021 Mike Fallesen</Typography>
                </Grid>
                <Grid item>
                    <Typography></Typography>
                </Grid>
                <Grid item alignItems='column'>
                    <Typography>Need to get in touch?</Typography>
                    <Typography><GitHubIcon/>Found an Issue? Open an issue on GitHub</Typography>
                    <Typography><EmailIcon/>You can also reach me through Email</Typography>
                    
                    
                </Grid>

            </Grid>
        </div>
    )
}
