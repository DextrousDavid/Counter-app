import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  render() {
    const {
      onRefresh,
      counters,
      onDecrement,
      onDelete,
      onReset,
      onIncrement,
    } = this.props;
    return (
      <div>
        <button className="btn mt-3 mb-1 btn-outline-info " onClick={onRefresh}>
          Refresh
        </button>
        <a className="btn btn-outline-info mt-3 mb-1 ml-3" href="/">
          Reset
        </a>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
          />
        ))}

        {/* <button
          className="btn m-3 btn-outline-info "
          onClick={this.onReset}
        >
          Reset
        </button> */}
      </div>
    );
  }
}

export default Counters;
