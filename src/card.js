import React from 'react';
import './card.css';
import h from './images/thehobbit.jpg';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
  } from 'react-router-dom';
function Card() {
    return(
        <Router>
            <Route path="/shire" exact>
        <div className='cuerpocard'>
            <div className='izq'>
                <div>
                    <p className='titulo'>The Hobbit</p>
                    <p className='sub'>novel by Tolkien</p>
                </div>
                <div>
                    <button className='btn'>Buy Item</button>
                </div>
            </div>
            <div className='centro'>
                <p className='txt'>The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel introduced Tolkien’s richly imagined world of Middle Earth in its Third Age and served as a prologue to his The Lord of the Rings.</p>
            </div>
            <div className='der'>
                <img className='imagen' src={h}/>
            </div>
        </div>
            </Route>
        </Router>
        
    );
}
export default Card;