import React,{ Component } from 'react';
import Login  from './Login';
import Imagenes  from './Imagenes';
import { Switch, Route } from 'react-router-dom';

const routing = (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/imagenes/" component={Imagenes}/>
    </Switch>
)

class Main extends Component{



    render(){
        return(
            <div className="mt-3 mb-3">
                <div className="imageView">
                   <img src="https://i.pinimg.com/originals/f0/dd/ec/f0ddec76cda8ee2756e663924856f81e.png" 
                   className="imageMain" alt="Responsive image"/>
                </div>
                <div className="body">
                   {routing}
                </div>                
            </div>
            /*<div className="mt-3 mb-3">
                <div className="imageView">
                   <img src="https://i.pinimg.com/originals/f0/dd/ec/f0ddec76cda8ee2756e663924856f81e.png" 
                   className="imageMain" alt="Responsive image"/>
                </div>
                <div className="body">
                   <Switch>
                       <Route exact path="/" component={Login}/>
                       <Route exact path="/imagenes/" component={Imagenes}/>
                   </Switch>
                </div>                
            </div>*/
        )
    }
}

export default Main;