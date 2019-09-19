import React from 'react'
import Dice1 from './Dicee Assets/dice1@2x.png'
import Dice2 from './Dicee Assets/dice2@2x.png'
import Dice3 from './Dicee Assets/dice3@2x.png'
import Dice4 from './Dicee Assets/dice4@2x.png'
import Dice5 from './Dicee Assets/dice5@2x.png'
import Dice6 from './Dicee Assets/dice6@2x.png'


const diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const Dice = ({ index1, index2 }) => {
    return (
        <div className='Container'>
            <img src={diceArray[index1]} className="App-logo" alt="logo" />
            <img src={diceArray[index2]} className="App-logo" alt="logo" />
        </div>
    );
}

export default Dice