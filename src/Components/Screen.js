import React from 'react';
import ImageCoverflow from './ImageCoverflow';
import MusicAlbums from './Music';
import MusicPlayer from './MusicPlayer';

const screen = (props) => {
  const { displayHome, displayCoverflow, displayMusic, displaySettings, displayAbout } =
    props.currentState.visibleComponent;
  let isMusicPlayerActive = props.currentState.isMusicPlayerActive;
  let renderComponent = null;
  let title = props.currentState.pageTitle;
  if (displayHome) {
    renderComponent = (
      <div className="menu-options">
        <div id="coverflow" className="option selected">
          Artists
        </div>
        <div id="music" className="option">
          Music
        </div>
       
        <div id="settings" className="option">
          Settings
        </div>
        <div id="about" className="option">
          About
        </div>
      </div>
    );
  } else if (displayCoverflow) {
    renderComponent = (
      <ImageCoverflow
        albums={props.currentState.albums}
        active={props.currentState.activeCoverflow}
      ></ImageCoverflow>
    );
  } else if (displayMusic) {
    if (isMusicPlayerActive) {
      console.log('Render Music Player');
      renderComponent = (
        <MusicPlayer
          song={props.currentState.songs[props.currentState.activeSongId]}
          songId={props.currentState.activeSongId}
          isMusicPlaying={props.currentState.isMusicPlaying}
        />
      );
    } else {
      renderComponent = (
        <MusicAlbums
          songs={props.currentState.songs}
          isMusicPlayerActive={isMusicPlayerActive}
          activeSongId={props.currentState.activeSongId}
        />
      );
    }
  } else if (displaySettings) {
    renderComponent = <div className="game-wrapper">IPOd settings</div>;
  } else if (displayAbout) {
    renderComponent = (
      <div className="menu-options">
        <div className="abt-wrapper">
          <span className="abt-text"> Made by Akshansh Shrivastava</span>
        </div>
      </div>
    );
  }
  return (
    <div className="screen">
      <div className="title-bar">
        <div className="title"> Apple {title}</div>
      </div>
      {renderComponent}
    </div>
  );
};

export default screen;
