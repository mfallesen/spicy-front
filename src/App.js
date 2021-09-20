import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import SpiceRack from './components/SpiceRack'
import AppOverview from './components/AppOverview';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import theme from './theme'
import LogInNav from './components/LogInNav';
import API from './utils/API';
import { useState } from 'react';
import UserProfile from './components/UserProfile';


function App() {

  let isLoggedIn = false;

  if (localStorage.getItem('JWT')) {
    isLoggedIn = true
  } else {
    isLoggedIn = false
  }

  const [signUpFormState, setSignUpFormState] = useState({
    username: '',
    password: '',
    email: '',
    name: '',
    passwordConfirm: ''
  })


  const signUpValidate = (signUpFormState) => {
    // let userNameRegEx = '*\w';
    // let nameRegEx = '*\w';
    // let passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$";
    // let emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';


    // while (signUpFormState.username === undefined && signUpFormState.username.length > 32 && signUpFormState.username !== userNameRegEx) {

    // }

  }

  const handleUserRegistration = event => {





    event.preventDefault();
    API.registerUser(signUpFormState).then(userData => {
      console.log("USER DATA:", userData);


      // Validate input before logging them in
      // try {
      //   API.login(userData).then(loginData => {

      //   })

      // } catch (e) {
      //   console.error(e)
      // }

    window.location.href = '/'
  })
}

const inputChangeRegister = event => {
  const { name, value } = event.target;
  setSignUpFormState({
    ...signUpFormState,
    [name]: value
  })
}

// Move the login logic into the app or into its individual UTILITY



return (
  <div>
    <ThemeProvider theme={theme}>

      {isLoggedIn === false ? <LogInNav /> : <Navbar></Navbar>}
      <CssBaseline>

        <Switch>
          <Route exact path={['/', '/home']}>
            <LandingPage />
            <AppOverview onSubmit={handleUserRegistration} />
          </Route>
          <Route exact path={'/signup'}>
            <SignUp onSubmit={handleUserRegistration} inputChange={inputChangeRegister} form={signUpFormState} />
          </Route>
          <Route exact path={'/spicerack'}>
            <SpiceRack />

          </Route>
          <Route exact path={'/userDashboard'}>
            <UserProfile />
          </Route>
        </Switch>
        <Footer />
      </CssBaseline>
    </ThemeProvider>


  </div>

);
}

export default App;
