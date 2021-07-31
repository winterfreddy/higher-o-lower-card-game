import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import Direction from './Direction';
import Game from './Game';
import HighScores from './HighScores';
import '../stylesheets/App.css';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/directions">Directions</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
          <li>
            <Link to="/highscores">High Scores</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/directions">
            <Direction />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/highscores">
            <HighScores />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
