import React from 'react';
import Ayra from './images/ayra.jpeg';
import './Ayra.css';
function ventana(){
    return(
        <div id="contenedor">
        <div id="contenido">
            <section>
                <img id="imagen" src={Ayra}/>
            </section>
            <section className="nombre">
                <h1>Ayra Stark</h1> 
            </section>
            <section className="subtitulo">
                <h4>PLAYED BY MAISIE WILLIAMS</h4>
            </section>
            <section className="texto" id="texto">
                <p>The younger of Ned and Cat's two daughters. A tomboy, she would rather fence than dance. Her direwolf is named Nymeria, after a warrior queen.</p>
            </section>
            <section  id="boton">
                <button>
                    WATCH VIDEO
                </button>
            </section>
        </div>
        </div>
    );
}
export default ventana;