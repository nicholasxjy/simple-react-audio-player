import React, { Component } from 'react';
import { render } from 'react-dom';

import '../node_modules/normalize-css/normalize.css';
import './assets/app.css';

import RYAudio from './components/RYAudio';

class App extends Component {  
  render() {
    return (
      <div className="main">
        <div className="audio-wrap">
          <RYAudio />
        </div>
      </div>
    )
  }
};

render(<App />, document.getElementById('react-app'));
