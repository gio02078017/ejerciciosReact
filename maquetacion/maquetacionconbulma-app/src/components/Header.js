import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render(){
        return(
        <div className="containerHeader">
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        {this.props.title}
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <Link className="button is-light" to="/">
                            <strong>Login</strong>
                        </Link>
                        <Link className="button is-light" to="/welcome/">
                           <strong>Welcome</strong>
                        </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        )
    }

}

export default Header;