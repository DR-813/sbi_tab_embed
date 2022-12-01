

import React from 'react';
import './App.css';
import { BrowserRouter as Router  } from 'react-router-dom';

import Nav from './components/Nav';
import Navbar from './components/Navbar/Navbar';




function App () {
  return(
    <Router>
    
      <div className="App">
        <header className="App-header">                
          <a className="home" href='#home'>Home</a>
        </header>          
        <div className='dashboard-container'>
          
          <div id="Nav" className="Nav"><Nav></Nav></div>
          <div id="Navbar" className="Navbar"><Navbar></Navbar></div>
          <div className='dashboard-body'>
              
            <tableau-viz id="tableauViz"       
              src='https://public.tableau.com/views/Superstore_24/Overview'      
              height='800px' width='1100px' toolbar='bottom'>
            </tableau-viz>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;