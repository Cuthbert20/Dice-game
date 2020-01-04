import React, { Component } from "react";
import "../styles/Die.css";

export default class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    face: "one"
  };
  render() {
    // console.log(this.props);
    return (
      <div style={{ margin: "1rem" }}>
        <i
          className={`Die fad fa-dice-${this.props.face} fa-7x ${this.props
            .rolling && "shaking"}`}
        ></i>
      </div>
    );
  }
}
