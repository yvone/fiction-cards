import React from 'react';
import './Stark.css'
import ayra from './images/ayra.jpeg'

function Stark() {
    return(
    
    <body className="Bio">
        <img src={ayra} />
        <section className="mid">
            <h1 className='nombre'> Ayra Stark </h1>
            <h6 className='nombreReal'> PLAYED BY MAISIE WILLIAMS </h6>
        </section>
        <p className='txt'> The younger of Ned and Cat's two daughters. A tomboy, she would rather fence than dance. Her direwolf is named Nymeria, after a warrior queen. 
        </p>
        <button className='video'>
        <p className='ver'> WATCH VIDEO </p> 
        </button>
    </body>
    
    )
}

export default Stark;