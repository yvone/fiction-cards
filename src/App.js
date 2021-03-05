import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Welcome from './images/welcome.jpeg';
import Starks from './starks'
import './App.css';

function App() {
  const hogwartsInformation = {
    creature: "The Sorting Hat",
    information: "The Sorting Hat is one of the cleverest enchanted objects most witches and wizards will ever meet. It literally contains the intelligence of the four founders, can speak (through a rip near its brim) and is skilled at Legilimency, which enables it to look into the wearer’s head and divine his or her capabilities or mood.",
    author: "J.K. Rowling",
  };

  const winterfellInformation = {
    character: "Ayra Stark",
    description: "The younger of Ned and Cat's two daughters. A tomboy, she would rather fence than dance. Her direwolf is named Nymeria, after a warrior queen.",
    actress: "Maisie Williams",
  };

  const theShireInformation = {
    title: "The Hobbit",
    summary: "The Hobbit, fantasy novel by J.R.R. Tolkien, published in 1937. The novel introduced Tolkien’s richly imagined world of Middle Earth in its Third Age and served as a prologue to his The Lord of the Rings.",
    author: "Tolkien",
  };

  return (
    <div className="App">
      <Router>
        <nav className="Menu">
          <Link className="Menu_link">Hogwarts</Link>
          <Link className="Menu_link" to="/starks">Winterfell</Link>
          <Link className="Menu_link">The Shire</Link>
        </nav>

        <Switch>

          <Route path = "/starks" exact = { true }>  <Starks {...winterfellInformation}/> </Route> 
          
          <Route path="/" exact>
            <section className="Page">
              <h1>Welcome to Fiction Cards App! 🧝‍♀️ 🧙‍♀️ 🤴</h1>
              <img
                className="Page_img"
                src={Welcome}
                alt="misterious path in the forest"
              />
            </section>
          </Route>

          <Route>
            <section className="Page">
              NOT FOUND, that route doesn't exist
             </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
