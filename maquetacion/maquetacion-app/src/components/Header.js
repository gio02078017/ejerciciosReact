import React,{ Component } from 'react';

class Header extends Component{

    render(){
        return(
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark indigo">
                <a href="#" className="navbar-brand"><strong>Navbar</strong></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">holasgsgsg</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a  href="#">Home <span class="sr-only">(current)</span></a>
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
        </div>
        )
    }
}

export default Header;