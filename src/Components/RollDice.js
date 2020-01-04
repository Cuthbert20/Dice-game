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
      dieTwo: "one",
      rolling: false
    };
    this.roll = this.roll.bind(this);
  }
  roll(event) {
    event.preventDefault();
    const newDieOne = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDieTwo = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dieOne: newDieOne, dieTwo: newDieTwo, rolling: true });
    setTimeout(() => this.setState({ rolling: false }), 2000);
    console.log(this.state);
  }
  render() {
    const { rolling, dieOne, dieTwo } = this.state;
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
          <Die face={dieTwo} rolling={rolling} />
          <Die face={dieOne} rolling={rolling} />
        </div>
        <div class="RolledDice">
          <button onClick={this.roll} disabled={rolling}>
            {rolling ? "Rolling..." : "Roll Dice"}
          </button>
          {/* Onclick that randomly changes the numSide state Value */}
        </div>
      </div>
    );
  }
}

export default RollDice;
