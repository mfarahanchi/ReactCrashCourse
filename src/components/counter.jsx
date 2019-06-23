import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  styles = {
    fontFamily: "Verdana",
    fontWeight: "bold",
    fontSize: 15
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <button
          style={{ fontStyle: "italic" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
