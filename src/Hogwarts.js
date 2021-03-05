import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './Hogwarts.css';
import logo from './sortinghat.jpg';

function Hogwarts () {
return (
  <div  className="rectangulo">
    <div className = "texto">
    The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood.
    <img src={logo} className="e-logo" alt="logo" />
    </div>
    <p id="texto2" > By J.K Rowlig </p>
</div>

);
}


export default Hogwarts;