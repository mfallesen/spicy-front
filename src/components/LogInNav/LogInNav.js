import { React, useEffect, useState } from 'react'
import { Button, makeStyles, Modal, } from '@material-ui/core'
import SignIn from '../SignIn/index'
import API from '../../utils/API'
import { useSelector, useDispatch } from 'react-redux'
import { close, open } from '../../utils/actions/openLoginModal'


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




export default function LogInNav() {
    const dispatch = useDispatch();
    const classes = useStyles()


    // Delete after migration
    // const[spiceRackState, setSpiceRackState] = useState()

    const [scrollState, setScrollState] = useState('top')


// Replacing modal Open STate with Redux component
    
    const modalOpen = useSelector( state => state.loginModalToggle)

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


    const handleUserLogin = async event => {
        event.preventDefault();
        await API.login(logInFormState).then(async newToken => {
            
            console.log(newToken.data.userRealName);

            localStorage.setItem('JWT', newToken.data.token);
            localStorage.setItem('USERNAME', logInFormState.username);
            localStorage.setItem('userFirstName', newToken.data.userRealName)


            const userID = newToken.data.id;
            localStorage.setItem('userId', userID)
            // console.log('userID: ', userID);

            
            
            console.log('The call is returned');
            console.log(userID);
            console.log(JSON.stringify(newToken.data.token));
            // Space for API call to retrieve spice rack
            await API.getUserSpices(userID).then(spiceArr => {
                console.log("It gets into the getUserSpices Call");
                const Spices = JSON.stringify(spiceArr)
                // console.log('USER SPICES', Spices);
                localStorage.setItem('Spices', Spices)
                
            })
        }).catch(err => {
            console.log("there is an error");
            console.error(err);
        }).finally(() => {
            window.location.href = '/spicerack'           
        })
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
            <Button color='inherit' onClick={() => dispatch(open())}>Log In</Button>
            <Modal
                open={modalOpen}
                aria-labelledby='login-modal-title'
                aria-describedby='login-modal-description'
            >
                <SignIn  classes={classes} handleClose={() => dispatch(close())} handleUserLogin={handleUserLogin} onInputChange={logInInputChange} form={logInFormState}/>
            </Modal>
        </div> 
    )
}
