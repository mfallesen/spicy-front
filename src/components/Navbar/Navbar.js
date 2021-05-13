import {Button, Menu, MenuItem} from '@material-ui/core'
import {React, useEffect, useState} from 'react'




export default function Navbar() {

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

    const [anchorEl, setAnchorEl]=useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    return (
        <div style={{
            // Color needs to be changed to Transparent for prod
            backgroundColor: scrollState === 'top' ? 'black' : 'grey',
            color: scrollState === 'top' ? 'white' : 'black',
            transitionDuration: '1s',
            position: 'fixed',
            marginTop: '5px',
            marginLeft:'5px',
            borderRadius: '5px',
            top: '1px',
        }}>
        <Button aria-controls="simple-menu" color='inherit' aria-haspopup="true" onClick={handleClick}>
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>My Spice Rack</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </div>
    )
}
