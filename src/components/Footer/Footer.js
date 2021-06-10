import React from 'react'
import { Grid, Link, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css'

export default function Footer() {
    return (
        <Grid container justify='center' spacing={6} className='footer-Main'>
            <Grid item >
                <Typography>Copyright 2021 Mike Fallesen</Typography>
            </Grid>
            <Grid item >
                <Typography>Need to get in touch?</Typography>

                <Typography className='link-decoration' >
                    <Link href='https://github.com/mfallesen/spicy-front/issues'>
                        <GitHubIcon />  Found an Issue? Open an issue on GitHub
                        </Link>
                </Typography>
                <Typography className='link-decoration' >
                    <Link href='mailto:mfallesen2010@gmail.com'>
                        <EmailIcon />  You can also reach me through Email
                        </Link>
                </Typography>


            </Grid>

        </Grid>
    )
}
