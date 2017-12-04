import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

import { DB_CONFIG } from './Config/Firebase/db_config.js';

import firebase from 'firebase/app';
import 'firebase/database';

//  App is our concrete class extending the abstract component class. super allows props to our parent component
// bind this update card
// need to call firebase initialize app and pass it our config
class App extends Component {
  constructor (props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);

    this.database = this.app.database().ref().child('cards');

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
    };
  }

// snap takes snapshot of database
// instead of Firebases key prop we could use snap.val().id as our data does contain id

  componentWillMount () {
    const currentCards = this.state.cards;

    this.database.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        A: snap.val().A,
        B: snap.val().B,
        C: snap.val().C
      });
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      });
    });
  }

  // Define the random card picker
  // 0-1 *cards.length. If card length is 2 get an answer from 0 to 1.9999999. Rounded down gives either 0 or 1 for index.
  getRandomCard (currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return (card);
  }

  // test the updateCard method
  updateCard () {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    });
  }

  // Insert a non-random card picker as well

  // Pass some props into card component
  // 'eng' will exist when the component is about to mount and we set its state to a random card from our array which contains an eng property on it with value of either English or English_2
  render () {
    return (
      <div className='App'>
        <div className='cardRow'>
          <Card A={this.state.currentCard.A}
            B={this.state.currentCard.B}
            C={this.state.currentCard.C} />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

export default App;
