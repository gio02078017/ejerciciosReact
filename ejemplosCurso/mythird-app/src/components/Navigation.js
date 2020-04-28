import React, { Component } from 'react';

class Navigation extends Component{

    render(){
        console.log("cantidad Navigation");        
        console.log(this.props.cantidad);
        return(
          <nav className='navbar navbar-dark bg-dark'>
              <a href="" className="text-white">
                {this.props.title}
                <span className="badge badge-pill badge-light ml-2">{this.props.cantidad}</span>
              </a>
          </nav>
        )
    }
}

export default Navigation;