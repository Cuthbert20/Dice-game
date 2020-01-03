import React, { Component } from "react";
import Die from "./Die";
import "../styles/RollDice.css";

class RollDice extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Die />
        <Die />
        <button>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
