import React from 'react';
import './Card.css';

// The data that we are going to pass our card is going to be 'props'
// The card container will hold a card with a front and back
const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front'>
        <div className='A'>{props.A}</div>
      </div>
      <div className='back'>
        <div className='B'>{props.B}</div>
        <div className='C'>{props.C}</div>
      </div>
    </div>
  </div>
);

export default Card;
