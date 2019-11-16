import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePageHeader from './Components/HomePageHeader/HomePageHeader';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from '../src/Pages/About';
import Contact from '../src/Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Route
            path="/"
            component={HomePageHeader}
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
      </Router>
    </div>
  );
}

export default App;
