import React, { Component } from 'react';

class HeaderComponent extends Component{

    render(){
      return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">">
        <a className="navbar-brand" href="/">{this.props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Constructor">Constructor <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ComponenteWillMount">ComponenteWillMount</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Render
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/RenderComponent">RenderNormal</a>
                <a className="dropdown-item" href="/RenderArrow">RenderArrow</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ComponenteDidMount">ComponenteDidMount</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/FetchExample">FetchNormal</a>
                <a className="dropdown-item" href="/FetchExampleAsync">FetchAsync</a>
                <a className="dropdown-item" href="/AxioExample">Axio</a>
                <a className="dropdown-item" href="/AxioExampleAsync">AxioAsync</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/CicloDeActualizacion">CicloDeActualizacion</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ComponenteWillUnmount">ComponenteWillUnmount</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ComponenteDidCatch">ComponenteDidCatch</a>
            </li>
           </ul>
        </div>
      </nav>
      )
    }

}

export default HeaderComponent;