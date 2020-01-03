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
      btnDisabled: false
    };
    this.ranNum = this.ranNum.bind(this);
    this.handleBtnDisable = this.handleBtnDisable.bind(this);
  }
  ranNum(event) {
    event.preventDefault();
    const newDieOne = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDieTwo = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    this.setState({ dieOne: newDieOne, dieTwo: newDieTwo, btnDisabled: true });
    setTimeout(() => this.setState({ btnDisabled: false }), 2000);
    console.log(this.state);
  }
  handleBtnDisable(event) {
    event.preventDefault();
    this.setState({ btnDisabled: true });

    setTimeout(() => this.setState({ btnDisabled: false }, 2000));
  }
  render() {
    const { btnDisabled, dieOne, dieTwo } = this.state;
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
          <Die face={dieTwo} />
          <Die face={dieOne} />
        </div>
        <div>
          <button onClick={this.ranNum} disabled={btnDisabled}>
            {btnDisabled ? "Rolling..." : "Roll Dice"}
          </button>
          {/* Onclick that randomly changes the numSide state Value */}
        </div>
      </div>
    );
  }
}

export default RollDice;
