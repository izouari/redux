import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeUser from './container/HomeUser';
import {Provider} from 'react-redux'
import store from './stors';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomeUser/>
      </Provider>
     
    </div>
  );
}

export default App;
