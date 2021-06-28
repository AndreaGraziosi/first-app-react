import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import './Footer.css';
import About from './About'
import POPOSDetails from './POPOSDetails'



function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path="/" component={POPOSList}/>
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer  className="Footer"/>
      </div>
    </Router>
  
  );
}


export default App;
