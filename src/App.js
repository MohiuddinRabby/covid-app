import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Global from './components/Global/Global';
import CountryData from './components/CountryData/CountryData';
import About from './components/About/About';
const App = () => {
  // https://coronavirus-19-api.herokuapp.com/countries
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Global} />
          <Route path="/search/country" component={CountryData} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
