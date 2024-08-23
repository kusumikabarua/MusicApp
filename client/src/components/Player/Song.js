// FileName: Song.js

import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <img src={require('../../assets/images/music.png')} alt={currentSong.title} />
            <h2>{currentSong.title}</h2>
          
        </div>
    );
};

export default Song;
