import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className="menu">
                <a href="" className="text-white">
                {this.props.title}
                </a>
            </div>
            <div className="options" >
             <ul>
                 <li><Link to="/">Login</Link></li>
                 <li><Link to="/imagenes/">Imagenes</Link></li>
             </ul>
            </div>
        </nav>
        )
    }
}

export default Header;