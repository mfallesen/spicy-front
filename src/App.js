import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import SpiceRack from './components/SpiceRack'
import AppOverview from './components/AppOverview';
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import theme from './theme'
import LogInNav from './components/LogInNav';
import API from './utils/API';
import { useState } from 'react';
import AddSpice from './components/AddSpice';

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



  const handleUserRegistration = event => {
    event.preventDefault();
    API.registerUser(signUpFormState).then(userData => {
      console.log("USER DATA:", userData);
      window.location.href = '/spicerack'
    })
  }

  const inputChangeRegister = event => {
    const { name, value } = event.target;
    setSignUpFormState({
      ...signUpFormState,
      [name]: value
    })
  }


  return (
    <div>
      <ThemeProvider theme={theme}>

        {isLoggedIn === false ? <LogInNav /> : <Navbar></Navbar>}
        <CssBaseline>

          <Switch>
            <Route exact path={['/', '/home']}>
              <LandingPage />
              <AppOverview />
            </Route>
            <Route exact path={'/signup'}>
              <SignUp onSubmit={handleUserRegistration} inputChange={inputChangeRegister} form={signUpFormState} />
            </Route>
            <Route exact path={'/spicerack'}>
              <SpiceRack />
              <AddSpice/>
            </Route>
          </Switch>
          <Footer />
        </CssBaseline>
      </ThemeProvider>


    </div>

  );
}

export default App;
