import React, { Component } from "react";

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      musicList: []
    };

    this.handleMusicList = this.handleMusicList.bind(this);
  }

  componentDidMount() {
    const url = "http://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then(res => {
        res.json();
      })
      .then(songs => {
        this.setState({ musicList: songs });
      });
  }

  handleMusicList(index) {
    const song = this.state.musicList;
  }

  render() {
    return (
      <div className="music-container">
        <h1>hey you</h1>
      </div>
    );
  }
}

export default MusicContainer;
