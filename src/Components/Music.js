import React, { useState, useEffect } from 'react';

const MusicAlbums = (props) => {
  const { songs } = props;
  const [selectedSong, setSelectedSong] = useState(0);
  const _propsSetSelectedSong = () => {
    return setSelectedSong(props.activeSongId);
  };

  
  useEffect(() => {
    _propsSetSelectedSong();
  });

  let musicComponent = (
    <div className="list">
      {songs.map((song, index) => {
        return (
          <div className={selectedSong === index ? 'song-card selected' : 'song-card'} key={index}>
            <div className="left">
              <img alt="song-poster" src={song.cover28} />
            </div>
            <div className="right">
              <div className="song-singer">
                <b>Singer:</b> {song.singer}
              </div>
              <div className="song-title">Title: {song.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return musicComponent;
};

export default MusicAlbums;
