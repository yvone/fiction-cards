import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Welcome from './images/welcome.jpeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="Menu">
          <Link className="Menu_link">Hogwarts</Link>
          <Link className="Menu_link">Winterfell</Link>
          <Link className="Menu_link">The Shire</Link>
        </nav>

        <Switch>
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
