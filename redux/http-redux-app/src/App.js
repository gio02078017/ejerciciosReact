import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Blog from './components/Blog'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Blog />
      </div>
    </Provider>
  );
}

export default App;
