import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const MusicPlayer = (props) => {
  const [songPlaying, setSongPlaying] = useState(true);
  const song = props.song;
  const songId = props.songId;
  const _propsSwapPlaying = () => {
    return setSongPlaying(props.isMusicPlaying);
  };
  useEffect(() => {
    _propsSwapPlaying();
  });
  return (
    <div className="player-wrapper" style={{ backgroundImage: `url(${song.cover})` }}>
      <ReactPlayer
        className="react-player"
        key={songId}
        url={song.musicSrc}
        playing={songPlaying}
        controls={false}
        light={false}
        width="100%"
        height="20%"
        onReady={() => _propsSwapPlaying()}
      />
    </div>
  );
};
export default MusicPlayer;
