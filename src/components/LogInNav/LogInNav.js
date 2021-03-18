import { React, useEffect, useState } from 'react'
import { Button, makeStyles, Modal, } from '@material-ui/core'
import SignIn from '../SignIn/index'

const useStyles = makeStyles({
    signInBG: {
        backgroundColor: 'white',
        width: '60%',
        padding: '20px',
        borderRadius: '5px',
        position: 'fixed',
        top: '50%',
        left: '20%',
        marginRight: '50%'

    }
})




export default function LogInNav(props) {
    const classes = useStyles()

    const [scrollState, setScrollState] = useState('top')
    const [modalOpen, setModalOpen] = useState(false)

    const [logInFormState, setLogInFormState] = useState({
        username: '',
        password: '',
      })
    
      const logInInputChange = event => {
        const { name, value } = event.target;
        setLogInFormState({
          ...logInFormState,
          [name]: value
        })
      }
    

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

    const handleOpen = () => {
        setModalOpen(true);
    }
    const handleClose = () => {
        setModalOpen(false);
    }

    return (
        <div style={{
            backgroundColor: scrollState === 'top' ? 'transparent' : 'grey',
            color: scrollState === 'top' ? 'white' : 'black',
            transitionDuration: '1s',
            position: 'fixed',
            marginTop: '5px',
            marginLeft: '5px',
            borderRadius: '5px'
        }}>
            <Button color='inherit' onClick={handleOpen}>Log In</Button>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby='login-modal-title'
                aria-describedby='login-modal-description'
            >
                <SignIn  classes={classes} handleClose={handleClose} inputChange={logInInputChange} form={logInFormState}/>
            </Modal>
        </div> 
    )
}
