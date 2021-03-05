import React from 'react';
import Sorting from './images/sortinghat.jpg';
import './Hogwarts.css';
import './App';
export default function Hogwarts(props){ 
    return(
        <section className="cuadroHogwarts">
            <article className="Contenedorimagen">
                <img src= {Sorting} id="imagen50"></img>
            </article>
            <article className="ContenedorTexto">
                <h1 id="titulo" >The Sorting Hat</h1>
                <p id="parrafo" >The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood.</p>
                <p id="autor" >J.K. Rowling</p>
                <button type="button" id="Boton">READ MORE</button>
            </article>
        </section>

    );
}