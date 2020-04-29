import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';
import WelcomeComponent from '../components/WelcomeComponent';
import { Route, BrowserRouter as Router } from 'react-router-dom'


const routing = (
    <Router>
        <Route exact path="/" component={FormComponent} />
        <Route exact path="/Welcome" component={WelcomeComponent} />
    </Router>
  )

class MainComponent extends Component{

    render(){
      return(
        <div className="container">
          <img src="https://lh3.googleusercontent.com/proxy/7JzmdgkSlNRh2lW5i4RuQ0dLRcZD5h2c-u5hfwih1SeRM2fPtCgSpccJ56qz6p8Aju8Buad-ZMkeDegzo2Kasn-7PC8kRwEUbOomEir6LcyCYCsGm4dOKOnQE2LO1_2myPpe-Aw9QaH7rxVcJg" className="img-fluid" alt="Responsive image"/>
          {routing}
      </div>
      )
    }

}

export default MainComponent;