import React, { Component } from 'react';
import RYPlayer from './RYPlayer';
import RYList from './RYList';
const data = {
  audios: [
    {
      id: 0,
      cover: 'http://ac-kp606flf.clouddn.com/b90d65631f87764c.jpeg',
      title: 'A Little Braver',
      singer: {
        name: 'New Empire'
      },
      src: 'http://ac-kp606flf.clouddn.com/e46abd07ab5fadfb.mp3'
    },
    {
      id: 1,
      cover: 'http://ac-kp606flf.clouddn.com/d7c5b077027fe441.jpeg',
      title: "We Don't Talk Anymore",
      singer: {
        name: 'Charlie Puth, Selena Gomez'
      },
      src: 'http://ac-kp606flf.clouddn.com/a5658869be4a0161.mp3'
    },
    {
      id: 2,
      cover: 'http://ac-kp606flf.clouddn.com/cbb303923ecf7e6e.jpeg',
      title: 'California Dreaming',
      singer: {
        name: 'The Papas'
      },
      src: 'http://ac-kp606flf.clouddn.com/038e69c75257b4f1.mp3'
    }
  ]
}

export default class RYAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audios: data.audios,
      currentRecord: data.audios[0]
    }
  }
  changeSong(change) {
    this.setState({
      currentRecord: change
    });
  }
  render() {
    return (
      <div className="ry-audio-container">
        <RYPlayer audio={this.state.currentRecord} autoPlay={true} loop={true}/>
        <RYList audios={this.state.audios} changeSong={this.changeSong.bind(this)}/>
      </div>
    )
  }
}
