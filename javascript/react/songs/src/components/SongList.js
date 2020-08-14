import React from 'react';
import { connect } from 'react-redux';
import { songSelected } from '../actions';

const SongList = (props) => {
  const renderedSongs = props.songs.map((song) => (
    <div key={song.title}>
      <div className="right floating">{song.title}</div>
      <button className="ui primary button">Detail</button>
    </div>
  ));
  return <div>{renderedSongs}</div>;
};

const mapStateToProps = (state) => ({
  songs: state.songs,
});

export default connect(mapStateToProps)(SongList);
