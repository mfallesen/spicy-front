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

function App() {
let navFlag = true

  return (
    <div>
<ThemeProvider theme={theme}>

        {navFlag === true ? <LogInNav></LogInNav> : <Navbar></Navbar>}
      <CssBaseline>

        <Switch>
          <Route exact path={['/','/home']}>
            <LandingPage />
            <AppOverview />
          </Route>
        <Route exact path={'/signup'}>
            <SignUp/>
        </Route>
        <Route exact path={'/spicerack'}>
          <SpiceRack/>
        </Route>
        </Switch>
        <Footer />
      </CssBaseline>
</ThemeProvider>

      
    </div>

  );
}

export default App;
