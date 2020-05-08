import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './sass/main.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { NotFound } from './pages/NotFound';

const routing = (
  <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signUP" component={SignUp} />
      <Route exact path="/home" component={Home} />
      <Route component={NotFound}/>
  </Switch>
)

function App() {
  return (
    <div className="App">
      {routing}
    </div> 
  );
}

export default App;
