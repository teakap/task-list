import React from 'react';
import List from './Components/List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 35, name: 'Do something' },
        { id: 42, name: 'Do something more' },
        { id: 56, name: 'Do something less' },
        { id: 71, name: 'Do something extravagant' },
        { id: 72, name: 'Whistle' },
      ]
    }
  }

  render() {

    return (
      <>
      <List items={this.state.items} />
      </>
    )
  }

}

export default App;
