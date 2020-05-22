import React, { Component } from 'react';
import {
  Route,
  HashRouter as Router,
  Link,
  // Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
// import { connect } from 'react-redux';
import PairingGame from './PairingGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="main-title">#stayhomehavefun #quarantinelife</h1>
        </header>
        <h2 class="intro-title">I'm not sure about you, but sometimes stay-at-home life has me feeling like this:</h2>
        <div>
          <img src="https://rockysretreat.com/rrmedia/dog-sleeping-on-couch-web-sized.jpg" alt="dog sleeping on couch" />
        </div>
        <h3 class="intro-title">Instead of snoozing all day, check out some of these activities to entertain yourself * IN PROGRESS *</h3>
        <Router>
          <div class="button-holder">
            <span class="emoji" id="emoji-face" role="img" aria-label="happy emoji">😆</span>
            <Link to="/pairing-game"><button class="button">PAIRING GAME</button></Link>
            <Link to="/maze"><button class="button">MAZE GAME</button></Link>
            <Link to="/guessing-game"><button class="button">GUESSING GAME</button></Link>
            <span class="emoji" role="img" aria-label="raised hands emoji">🙌🏽</span>
            <Switch>
              <Route
                exact path="/pairing-game"
                component={PairingGame}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default (App);
