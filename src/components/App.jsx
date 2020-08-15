import React, { Component } from 'react';
import Counters from './Counters';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    console.log('Holla Constructor!');
  }
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
      { id: 5, value: 6 },
    ],
  };

  // Increment Handler
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  // Decrement Handler
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  //Delete Handler
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  //Reset Handler
  handleRefresh = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  //Refresh Handler incomplete
  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     return <Counters />;
  //   });
  //   this.setState({ counters });
  // };
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onRefresh={this.handleRefresh}
            // onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
