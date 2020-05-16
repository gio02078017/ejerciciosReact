import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from './pages/NotFound';



class App extends Component {


  render(){
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/detail/:id' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
      </div>
    );

    /*const url = new URL(document.location);
    const Page = url.searchParams.has('id')
      ? <Detail id = {url.searchParams.get('id')}/>
      : <Home/>

    return (
      <div className="App">
          {Page}
      </div>
    );*/
    
    /*const hasId = url.searchParams.has('id');

    if(hasId){
      return <Detail id = {url.searchParams.get('id')}/>
    }

    return (
      <div className="App">
         <Home/>
      </div>
    );*/
  }
}

export default App;
