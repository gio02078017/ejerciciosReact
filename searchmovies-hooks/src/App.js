import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import {NotFound} from './pages/NotFound';

const routing = (
  <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
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
