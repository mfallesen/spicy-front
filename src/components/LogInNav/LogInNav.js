import {React, useEffect, useState} from 'react'
import {Button, } from '@material-ui/core'

export default function LogInNav() {

    const [scrollState, setScrollState] = useState('top')
    
    useEffect(() => {
        let navScroll = null
        navScroll = document.addEventListener('scroll', scrollEvent => {
            let scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 100) {
                setScrollState('notTop')
            } else {
                setScrollState('top')  
            }
        })
        return () => {
            document.removeEventListener('scroll', navScroll)
        }
    }, [scrollState])


    return (
        <div style={{
            backgroundColor: scrollState === 'top' ? 'transparent' : 'grey',
            color: scrollState === 'top' ? 'white' : 'black',
            transitionDuration: '1s',
            position: 'fixed',
            marginTop: '5px',
            marginLeft:'5px',
            borderRadius: '5px'
        }}>
            <Button color='inherit'>Log In</Button>
        </div>
    )
}
