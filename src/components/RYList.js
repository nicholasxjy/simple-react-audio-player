import React, { Component } from 'react';

class RYList extends Component {
  constructor(props) {
    super(props);
  }
  _changeSong(song) {
    this.props.changeSong(song);
  }
  render() {
    let { audios } = this.props;
    let list = audios.map(item => {
      var style = {
        backgroundImage: `url(${item.cover})`
      }
      return (
        <div className="record-item" key={item.id} onClick={() => this._changeSong(item)}>
          <div className="record-cover" style={style}>
            <div className="record-mask"></div>
            <div className="record-info">
              <div className="record-title">{item.title}</div>
              <div className="record-singer">{item.singer.name}</div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="ry-player-list">
        {list}
      </div>
    )
  }
}

export default RYList;
