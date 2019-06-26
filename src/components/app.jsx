import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import GoogleMap from './google_map.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <GoogleMap />
      </div>
    );
  }
}

export default App;

// console.log(flats[0].imageUrl)
