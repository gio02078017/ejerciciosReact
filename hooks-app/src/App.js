import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';

import { HookUseState } from './pages/UseState/HookUseState';
import {HookUseStateBoolean} from './pages/UseState/HookUseStateBoolean';
import {HookUseStateObject} from './pages/UseState/HookUseStateObject';
import {HookUseStateMultiple} from './pages/UseState/HookUseStateMultiple';

import {HookUseEffect} from './pages/UseEffect/HookUseEffect';
import {HookUseEffectWithListener} from './pages/UseEffect/HookUseEffectWithListener';
import {HookUseEffectControl} from './pages/UseEffect/HookUseEffectControl';
import {HookEffectHttp} from './pages/UseEffect/HookEffectHttp';

import {HookUseRef} from './pages/UseRef/HookUseRef';
import {HookUseRefExample} from './pages/UseRef/HookUseRefExample';
import {HookUseRefNPM} from './pages/UseRef/HookUseRefNPM';

import {HookUseContext} from './pages/others/HookUseContext';
import {HookUseLayoutEffect} from './pages/others/HookUseLayoutEffect';
import {HookUseReducer} from './pages/others/HookUseReducer';
import {HookUseImperativeHandle} from './pages/others/HookUseImperativeHandle';

import {ReactMemo} from './pages/performance/ReactMemo';
import {ReactMemoExample2} from './pages/performance/ReactMemoExample2';
import {HookUseCallback} from './pages/performance/HookUseCallback';
import {HookUseCallbackExample} from './pages/performance/HookUseCallbackExample';
import {HookUseMemo} from './pages/performance/HookUseMemo';

import {CustomerHook} from './pages/customer/CustomerHook';
import {HookUseDebugValue} from './pages/customer/HookUseDebugValue';
import {CustomerHookHTTP} from './pages/customer/CustomerHookHTTP';
import {CustomerHookDetailHTTP} from './pages/customer/CustomerHookDetailHTTP';

import {NotFound} from './pages/NotFound';

const routing = (
  <Switch>
      <Route exact path="/" component={HookUseState} />
      <Route exact path="/HookUseStateBoolean" component={HookUseStateBoolean} />
      <Route exact path="/HookUseStateObject" component={HookUseStateObject} />
      <Route exact path="/HookUseStateMultiple" component={HookUseStateMultiple} />
      <Route exact path="/HookUseEffect" component={HookUseEffect} />
      <Route exact path="/HookUseEffectWithListener" component={HookUseEffectWithListener} />
      <Route exact path="/HookUseEffectControl" component={HookUseEffectControl} />
      <Route exact path="/HookEffectHttp" component={HookEffectHttp} />
      <Route exact path="/HookUseContext" component={HookUseContext} />
      <Route exact path="/HookUseLayoutEffect" component={HookUseLayoutEffect} />
      <Route exact path="/HookUseRef" component={HookUseRef} />
      <Route exact path="/HookUseRefExample" component={HookUseRefExample} />
      <Route exact path="/HookUseRefNPM" component={HookUseRefNPM} />
      <Route exact path="/HookUseReducer" component={HookUseReducer} />
      <Route exact path="/HookUseImperativeHandle" component={HookUseImperativeHandle} />
      <Route exact path="/ReactMemo" component={ReactMemo} />
      <Route exact path="/ReactMemoExample2" component={ReactMemoExample2} />
      <Route exact path="/HookUseCallback" component={HookUseCallback} />
      <Route exact path="/HookUseCallbackExample" component={HookUseCallbackExample} />
      <Route exact path="/HookUseMemo" component={HookUseMemo} />
      <Route exact path="/CustomerHook" component={CustomerHook} />
      <Route exact path="/HookUseDebugValue" component={HookUseDebugValue} />
      <Route exact path="/CustomerHookHTTP" component={CustomerHookHTTP} />
      <Route exact path="/CustomerHookDetailHTTP" component={CustomerHookDetailHTTP} />
      <Route component={NotFound}/>
  </Switch>
)

function App() {
  return (
    <div className="App">
      <Header title="Hooks"/>
      {routing}     
    </div>
  );
}

export default App;
