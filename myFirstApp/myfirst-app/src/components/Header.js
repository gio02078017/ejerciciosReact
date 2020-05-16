import React, { Component } from 'react'

export default class Header extends Component {

    _handleCloseSession = () => {
        localStorage.removeItem('token');
        this.props.history.push({
            pathname: '/',
            from: this.props.location.pathname,
        });
    }

    render() {
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <a className="navbar-brand text-light" href="/">{this.props.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <a className="nav-link  text-light" href="/" onClick={this._handleCloseSession}>Salir</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
