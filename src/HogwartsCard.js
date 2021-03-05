import React from "react";
import './HogwartsCard.css';
import SortingHatImage from "./images/sortinghat.jpg";
import App from './App'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom';

function HogwartsCard() {
    return(
        <React.Fragment>
            <section id="card">
                <section id="image">
                    <img src={SortingHatImage} alt='TheSortingHat'/>
                </section>
                <section id="information">
                    <h1 id="titleCard">The Sorting Hat</h1>
                    <p id="descriptionCard">The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood.</p>
                    <p id="attribution">By J.K. Rowling</p>
                    <br/>
                    <button>READ MORE</button>
                </section>
            </section>
        </React.Fragment>
    );
}

export default HogwartsCard;