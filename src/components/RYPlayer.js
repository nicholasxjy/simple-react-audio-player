import React, { Component } from 'react';

export default class RYPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };
    this._playAudio = this._playAudio.bind(this);
    this._pauseAudio = this._pauseAudio.bind(this);
  }
  componentDidMount() {
    let { autoPlay } = this.props;
    this.setState({
      isPlaying: autoPlay
    });
  }
  _playAudio() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    this.audioEle.play();
  }
  _pauseAudio() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    this.audioEle.pause();
  }
  render() {
    let currentRecord = this.props.audio;
    let defaultStyle = {
      backgroundImage: `url(${currentRecord.cover})`
    }
    let recordStyle = {
      backgroundImage: 'url(http://ac-kp606flf.clouddn.com/bee81ceb26a9b3eb.svg)'
    }

    // <div className={this.state.isPlaying ? 'player-slider is-paused': 'player-slider'} style={sliderStyle}></div>

    let sliderStyle = {
      backgroundImage: 'url(http://ac-kp606flf.clouddn.com/fb5848208a70c951.svg)'
    }
    let playButtonStyle = {
      backgroundImage: 'url(http://ac-kp606flf.clouddn.com/6b4924094361979d.svg)'
    }
    let pauseButtonStyle = {
      backgroundImage: 'url(http://ac-kp606flf.clouddn.com/11ecf23c41dcb1ed.svg)'
    }
    let playRender = this.state.isPlaying ? <div className="player-pause-button" style={pauseButtonStyle} onClick={this._pauseAudio}></div> : <div className="player-play-button" style={playButtonStyle} onClick={this._playAudio}></div>;

    let audioRender = (
      <audio ref={(ref) => this.audioEle = ref} src={currentRecord.src}></audio>
    )
    if (this.props.autoPlay && this.props.loop) {
      audioRender = (
        <audio ref={(ref) => this.audioEle = ref} src={currentRecord.src} autoPlay loop></audio>
      )
    } else if (this.props.loop) {
      audioRender = (
        <audio ref={(ref) => this.audioEle = ref} src={currentRecord.src} loop></audio>
      )
    } else if (this.props.autoPlay) {
      audioRender = (
        <audio ref={(ref) => this.audioEle = ref} src={currentRecord.src} autoPlay></audio>
      )
    }

    return (
      <div className="ry-audio-player">
        <div className="player-cover" style={defaultStyle}></div>
        <div className={this.state.isPlaying ? 'player-record' : 'player-record is-paused'} style={recordStyle}>
          <div className="current-cover">
            <img src={currentRecord.cover} alt={currentRecord.title} />
            <span className="record-center-dot"></span>
          </div>
        </div>
        {playRender}
        <div className="current-record-title">{currentRecord.title}</div>
        {audioRender}
      </div>
    )
  }
}
