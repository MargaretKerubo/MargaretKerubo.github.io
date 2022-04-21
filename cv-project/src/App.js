import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/Home';

function App() {
  return (
    <div className='wrap-content'>
      <div className='container'>
        <Home />

      </div>
    </div>   
  );
}

export default App;
