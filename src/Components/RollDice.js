import React, { Component } from "react";
import Die from "./Die";
import "../styles/RollDice.css";

//empty array
class RollDice extends Component {
  constructor() {
    super();
    this.state = {
      numSide: []
    };
  }
  ranNum() {
    const numArr = ["one", "two", "three", "four", "five", "six"];
    numArr.forEach((elm, index) => {});
    //   this.setState({numSide: })
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
          <Die numSide={this.state.numSide[0]} />
          <Die numSide={this.state.numSide[0]} />
        </div>
        <div>
          <button>Roll Dice</button>
          {/* Onclick that randomly changes the numSide state Value */}
        </div>
      </div>
    );
  }
}

export default RollDice;
