import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import GoogleMap from './google_map.jsx';
import flats from '../../data/flats.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedFlat: flats[0],
      flats
    };
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <GoogleMap />
      </div>
    );
  }
}

export default App;

// console.log(flats[0].imageUrl)
