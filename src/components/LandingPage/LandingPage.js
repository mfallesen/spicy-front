import { Heading, Pane } from 'evergreen-ui'
import React from 'react'
import Background from './Background'
import './Landing.css'


export default function LandingPage() {
    return (
        

           

                <Pane
                    display="flex"
                    height={`600px`}
                    width={'100%'}
                    justifyContent="center"
                    alignItems='center'
                    backgroundImage={'url(https://res.cloudinary.com/dyn9tmf2i/image/upload/v1611791392/SpiceAppBackgroundMed_gcmiqr.png)'}
                >
                    <Pane
                    width={`60%`}
                    className={'blurredBG'}
                    borderRadius={`10px`}
                    paddingBottom='40px'
                    paddingLeft='40px'
                    paddingRight='40px'
                    >

                    <Heading color='white' size={900} marginTop='default'>Welcome to Krydda.</Heading>
                    <Heading color='white' size={700} marginTop='default'>Your Virtual Spice Rack</Heading>
                    <Heading color='white' size={500} marginTop='default'>We help you keep your spice rack organized, virtually speaking of course, we can't control how you organize them at home.</Heading>
                    </Pane>
                </Pane>
           
       
    )
}
