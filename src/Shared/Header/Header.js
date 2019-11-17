import React from 'react';
import { Link } from 'react-router-dom';


const Header = (props) => {
 console.log(props);
 
  return (
    <header className="masthead" style={{backgroundImage :'url("'+props.image+'")' , height : props.height}} >
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">{props.title}</div>
          <div className="intro-heading text-uppercase">{props.subTitle}</div>
          {props.showButton &&
            <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="/services">{props.buttonText}</Link>
          }
        </div>
      </div>
    </header>
  )
};

export default Header;
