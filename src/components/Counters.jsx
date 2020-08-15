import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
  render() {
    const {
      onRefresh,
      counters,
      onDecrement,
      onDelete,
      onIncrement,
    } = this.props;
    return (
      <div>
        <button className="btn m-3 btn-outline-info " onClick={onRefresh}>
          Refresh
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
        <br />
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
