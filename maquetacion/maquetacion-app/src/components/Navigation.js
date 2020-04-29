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
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a  href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                        <a href="#">Link</a>
                        </li>
                        <li className="nav-item">
                        <a href="#">Profile</a>
                        </li>
                    </ul>
                </div>
          </nav>
        )
    }
}

export default Navigation;