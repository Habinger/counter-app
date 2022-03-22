import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //   };
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  render() {
    let classes = "badge m-2 bg-";
    this.props.counter.value === 0
      ? (classes += "secondary")
      : (classes += "info");

    return (
      <div className="ms-2" style={{ height: 50 }}>
        <span className="badge bg-secondary h-50">{this.props.product}</span>
        <button
          className="btn btn-warning m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>

        <span className={classes}>{this.formatCount()}</span>

        <button
          className="btn btn-primary m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
