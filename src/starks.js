import React from 'react';
import './starks.css'
import Ayra from './images/ayra.jpeg'

function Starks(props){
    return(
        <div className="contenedor">
            <div className="cont-card">
                  <img src={Ayra} alt="Ayra Stark" className="img-header"/>
                  <div className="cont-texto">
                      <h1 className="character-name">{props.character}</h1>
                      <h6 className="actor">{`Played by ${props.actress}`}</h6>
                      <p className="description">{props.description}</p>
                      <button className="video">WATCH VIDEO</button>
                  </div>
            </div>
        </div>
    )
}

export default Starks;