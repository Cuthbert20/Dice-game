import React, { Component } from "react";
import Die from "./Die";
import "../styles/RollDice.css";

class RollDice extends Component {
  constructor() {
    super();
    this.state = {
      numSide: ["one", "two", "three", "four", "five", "six"]
    };
  }
  render() {
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    };
    return (
      <div style={style}>
        <h2>Roll Them Bones</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
          }}
        >
          <Die numSide={this.state.numSide} />
          <Die numSide={this.state.numSide} />
        </div>
        <div>
          <button>Roll Dice</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
