import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CreateAlertPage from './pages/CreateAlertPage';
import UpdateAlertPage from './pages/UpdateAlertPage';

const routing = (
  <Switch>
      <Route exact path="/" component={CreateAlertPage} />
      <Route exact path="/Update" component={UpdateAlertPage} />
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
