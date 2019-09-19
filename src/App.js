import React, { Component } from 'react';
import Roll from './Roll.js'
import './App.css';
import Dice from './Dice.js'

class App extends Component {
  constructor() {
      super()
      this.state = {
          diceIndexI: 1,
          diceIndexII: 2
      }
  }
  
  updateDice = (event) => {
    var randomDiceIndex1 = Math.floor(Math.random() * Math.floor(6));
    var randomDiceIndex2 = Math.floor(Math.random() * Math.floor(6));
    console.log(`Button has been pressed ${randomDiceIndex1} and ${randomDiceIndex2}`);
    this.setState({ diceIndexI: randomDiceIndex1, diceIndexII: randomDiceIndex2 })
}

  render () {
    const { diceIndexI, diceIndexII } = this.state;
    return (
      <div className="App">
        <header className="App-header">
            <Dice index1={diceIndexI} index2={diceIndexII}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Roll whenPressed={this.updateDice}/>
        </header>
      </div>
    );
  }
}

export default App;
