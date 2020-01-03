import React, { Component } from "react";
import "../styles/Die.css";

export default class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ margin: "1rem" }}>
        <i class="fad fa-dice-one fa-7x"></i>
      </div>
    );
  }
}
