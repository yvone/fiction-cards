import React from 'react';

import TheHobbit from './images/thehobbit.jpg';

import './TheShire.css';

function TheShire() {
  const theShireInformation = {
    title: "The Hobbit",
    summary: "The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel introduced Tolkien’s richly imagined world of Middle Earth in its Third Age and served as a prologue to his The Lord of the Rings.",
    author: "Tolkien",
  };

  return (
    <section className="Card">

      <div className="Info">
        <h1 className="Titulo">
          The Hobbit
        </h1>
        <p className="Autor">
          novel by Tolkien
        </p>
          <button className="Boton">BUY ITEM</button>
      </div>

      <h6 className="Descripcion">
        The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel introduced Tolkien’s richly imagined world of Middle Earth in its Third Age and served as a prologue to his The Lord of the Rings.
      </h6>

      <img className="Libro" src={TheHobbit} />

    </section>
  );
}

export default TheShire;