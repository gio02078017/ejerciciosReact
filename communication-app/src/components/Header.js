import React from 'react';



export const Header = (props) => {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand text-light" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">FatherToSon</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/SonToFather">SonToFather</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Brothers">Brothers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ObserverPattern">ObserverPattern</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/GlobalVar">GlobalVar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/APIContext">APIContext</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                RenderProp
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/RenderPropSonToFather">RenderPropSonToFather</a>
                <a className="dropdown-item" href="/RenderProp">RenderProp</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hoc
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/HocSonToFather">HocSonToFather</a>
                <a className="dropdown-item" href="/HocConfig">HocConfig</a>
                <a className="dropdown-item" href="/HocWithSizes">HocWithSizes</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PropChildren
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/PropChildrenExample1">PropChildrenExample1</a>
                <a className="dropdown-item" href="/UtilChildrens">UtilChildrens</a>
                <a className="dropdown-item" href="/ImplicitComposition">ImplicitComposition</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/LazyAndSuspence">LazyAndSuspence</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Refs
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/ExampleRef">ExampleRef</a>
                <a className="dropdown-item" href="/RefsWithThirdLibraries">RefsWithThirdLibraries</a>
                <a className="dropdown-item" href="/ForwardRef">ForwardRef</a>
              </div>
            </li>
           </ul>
        </div>
        </nav>
    </div>
    )
}