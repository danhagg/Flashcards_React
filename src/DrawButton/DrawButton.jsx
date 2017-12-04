import React, { Component } from 'react';
import './DrawButton.css';

// create a drawCard() method applied to this
// need to bind this to drawButton component or it would be undefined
// Achieved by "this.drawCard = this.drawCard.bind(this)"
class DrawButton extends Component {
  constructor (props) {
    super(props);

    this.drawCard = this.drawCard.bind(this);
  }

  // update the state of app.js to get a new random card when the state is updated. Pass drawCard on props and pass to drawCard component
  // The onClick event will fire that drawCard method in our App component
  // see app for drawCard definition
  drawCard () {
    this.props.drawCard();
  }

  render (props) {
    return (
      <div className='buttonContainer'>
        <button className='btn' onClick={this.drawCard}>Draw Card</button>
      </div>
    );
  }
}

export default DrawButton;
