import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Route
            path="/"
            component={Home}
            exact
          />

          <Route
            path="/about"
            component={About}
          />
 
          <Route
            path="/contact"
            component={Contact}
          />

        </NavBar>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
