import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './Hogwarts.css';
import logo from './thehobbit.jpg';

function Hogwarts () {
return (
  <div  className="rectangulo">
    <div className = "texto">

    The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel introduced Tolkien’s richly imagined world of Middle Earth in its Third Age and served as a prologue to his The Lord of the Rings.   
     <img src={logo} className="imagen" alt="logo" />
     <div className="boton">But item</div>
    </div>
    <p className="titulo"> The Hobbit </p>
    <p className="texto2"> novel by Tolkien </p>
</div>

);
}


export default Hogwarts;