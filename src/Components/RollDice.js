import React, { Component } from "react";
import Die from "./Die";
import "../styles/RollDice.css";

//empty array
class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };
  constructor() {
    super();
    this.state = {
      dieOne: "one",
      dieTwo: "one"
    };
    this.ranNum = this.ranNum.bind(this);
  }
  ranNum() {
    const newDieOne = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDieTwo = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dieOne: newDieOne, dieTwo: newDieTwo });
    console.log(this.state);
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
          <Die face={this.state.dieTwo} />
          <Die face={this.state.dieOne} />
        </div>
        <div>
          <button onClick={this.ranNum}>Roll Dice</button>
          {/* Onclick that randomly changes the numSide state Value */}
        </div>
      </div>
    );
  }
}

export default RollDice;
