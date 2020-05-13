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
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                UseState
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Normal</a>
                <a className="dropdown-item" href="/HookUseStateBoolean">HookUseStateBoolean</a>
                <a className="dropdown-item" href="/HookUseStateObject">HookUseStateObject</a>
                <a className="dropdown-item" href="/HookUseStateMultiple">HookUseStateMultiple</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                UseEffect
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/HookUseEffect">Normal</a>
                <a className="dropdown-item" href="/HookUseEffectWithListener">HookUseEffectWithListener</a>
                <a className="dropdown-item" href="/HookUseEffectControl">HookUseEffectControl</a>
                <a className="dropdown-item" href="/HookEffectHttp">HookEffectHttp</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/HookUseContext">HookUseContext</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                UseRef
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/HookUseRef">HookUseRef</a>
                <a className="dropdown-item" href="/HookUseRefExample">HookUseRefExample</a>
                <a className="dropdown-item" href="/HookUseRefNPM">HookUseRefNPM</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Otros
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/HookUseLayoutEffect">HookUseLayoutEffect</a>
                <a className="dropdown-item" href="/HookUseReducer">HookUseReducer</a>
                <a className="dropdown-item" href="/HookUseImperativeHandle">HookUseImperativeHandle</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Memoria
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/ReactMemo">ReactMemo</a>
                <a className="dropdown-item" href="/ReactMemoExample2">ReactMemoExample2</a>
                <a className="dropdown-item" href="/HookUseCallback">HookUseCallback</a>
                <a className="dropdown-item" href="/HookUseCallbackExample">HookUseCallbackExample</a>
                <a className="dropdown-item" href="/HookUseMemo">HookUseMemo</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Personalizados
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/CustomerHook">CustomerHook</a>
                <a className="dropdown-item" href="/HookUseDebugValue">HookUseDebugValue</a>
                <a className="dropdown-item" href="/CustomerHookHTTP">CustomerHookHTTP</a>
                <a className="dropdown-item" href="/CustomerHookDetailHTTP">CustomerHookDetailHTTP</a>
              </div>
            </li>
           </ul>
        </div>
        </nav>
    </div>
    )
}