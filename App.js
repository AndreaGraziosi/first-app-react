import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import POPOSList from './components/POPOSList';
import Footer from './components/Footer';
import './components/Footer.css';
import About from './components/About';
import POPOSDetails from './components/POPOSDetails';



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
