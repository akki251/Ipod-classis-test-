import React from 'react';

const ipodControls = (props) => {
            return (
            <div id="circle" className="controls" onMouseDown={props.onRotate}>
                <img id="menu" className="menu" src="menu.svg" alt="menu" onClick={props.onMenuClick} draggable="false"/>
                <img id="next" className="next" src="next_track.svg" alt="next_track" onClick={props.onNextClick} draggable="false"/>
                <img id="prev" className="previous" src="prev_track.svg" alt="previous track" onClick={props.onPrevClick} draggable="false"/>
                <img id="play" className="play" src="play_pause.svg" alt="play pause" onClick={props.onPlayPauseClick} draggable="false"/>
                <div id="center-btn" className="centerButton" onClick={props.onCenterBtnClick}></div>
            </div>
        )
    
}

export default ipodControls;