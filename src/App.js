import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Global from './components/Global/Global';
import About from './components/About/About';
import Country from './components/Country/Country';
const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Global} />
          <Route path="/search/country" component={Country} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
