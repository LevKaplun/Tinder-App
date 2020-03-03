import React, { Component } from 'react';
import './App.css';
import './StyleSheet1.css';

import Tinder from './Components/tinder';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Tinder/>
      </header>
    </div>
  );
}

export default App;
