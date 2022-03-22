//import { Alert } from "bootstrap";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    this.product = "";
    this.amount = 0;
    this.state = {
      counters: [],
    };
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value !== 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = (e) => {
    e.preventDefault();
    // const counters = this.state.counters.map((c) => {
    //   c.value = 0;
    //   return c;
    // });
    const counters = [];
    this.setState({ counters });
  };

  handleAdd = (event) => {
    event.preventDefault();
    if (this.amount > 0 && this.product !== "") {
      const copyPaste = Object.assign([], this.state.counters);
      const index = copyPaste.length;
      copyPaste.push({ id: index, value: this.amount });
      this.setState({ counters: copyPaste });
    } else {
      alert("Some Imput is Missing");
    }
  };

  render() {
    return (
      <div>
        <div className="mt-4 ms-2">
          <form className="row g-3" onSubmit={this.handleAdd}>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                // id="inputPassword2"
                onBlur={(event) => {
                  var letters = /^[A-Za-z]+$/;
                  event.target.value.match(letters)
                    ? (this.product = event.target.value)
                    : alert("You Should Be Smarter Than That Bro");
                }}
                placeholder="Product"
              />
            </div>
            <div className="col-auto">
              <input
                type="number"
                className="form-control"
                onBlur={(e) => {
                  this.amount = e.target.value;
                }}
                placeholder="Amount"
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-success mb-3" type="submit">
                Add
              </button>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-success mb-3"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {this.state.counters.map((counter, index) => {
          return (
            <Counter
              key={index}
              id={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              product={this.product}
            />
          );
        })}
        <button
          className="btn btn-success m-2"
          onClick={() => {
            alert("Hold Your Horses Dude!!!");
          }}
        >
          Go To Cart
        </button>
      </div>
    );
  }
}

export default Counters;
