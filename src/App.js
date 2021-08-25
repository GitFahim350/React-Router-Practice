
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import CountryDetails from './Components/CountryDetails/CountryDetails';


function App() {
  return (

    <Router>


      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route exact path="/">
          <Home></Home>

        </Route>
        <Route  path="/CountryDetails/:alpha3code">
          <CountryDetails></CountryDetails>

        </Route>
        <Route  path="*">
          <h1>404 Error</h1>

        </Route>

      </Switch>

    </Router>

  );
}

export default App;
