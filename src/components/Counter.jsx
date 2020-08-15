import React, { Component } from 'react';

class Value extends Component {
  // Changes to 'Zero' when number is 0
  formatvalue() {
    const { value } = this.props.counter;
    // return value === 0 ? 'Zero' : value;
    return value <= 0 ? 'Zero' : value;
  }
  // Badge Classes Method
  getBadgeClasses() {
    let classes = 'badge m-2 mt-4 badge-';
    if (this.props.counter.value <= 0) {
      classes += 'danger';
      return classes;
    } else if (this.props.counter.value > 0 && this.props.counter.value < 6) {
      classes += 'warning';
      return classes;
    } else {
      classes += 'success';
      return classes;
    }
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <br />

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn ml-1 btn-sm btn-warning"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-sm ml-3 btn-secondary"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn ml-3 btn-sm btn-danger"
        >
          Delete
        </button>
        <br />
        {/* styles go in here */}
        {/* <style jsx>{``}</style> */}
      </div>
    );
  }
}

export default Value;
