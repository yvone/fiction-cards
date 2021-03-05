import REACT from 'react';
import thehobbit from './images/thehobbit.jpg';
import TheHobbit from './TheHobbit.css';

function Hobbit () {
    return (
        <div className = 'principal'>
            <p id='parrafoprincipal'> The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel 
                introduced Tolkien’s richly imagined world of Middle Earth in its Third 
                Age and served as a prologue to his The Lord of the Rings.</p>
            <h2 id='tituloprincipal'> The Hobbit </h2>
            <h6 id='h66'> novel by Tolkien </h6>
                <button type="button" id='botoncomprar'> BUY ITEM </button>
            <img src={thehobbit} id='hobbit'/>
        </div>
    )
}

export default Hobbit;