import React, { Component } from "react";
import "../styles/Die.css";

export default class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    numSide: "one"
  };
  render() {
    console.log(this.props);
    return (
      <div style={{ margin: "1rem" }}>
        <i className={`fad fa-dice-${this.props.numSide} fa-7x`}></i>
      </div>
    );
  }
}
