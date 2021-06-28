import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import './Footer.css';

function App() {
  return (
    <div className="App">
      <Title />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <POPOSList />
      <Footer  className="Footer"/>
    </div>
  
  );
}


export default App;
