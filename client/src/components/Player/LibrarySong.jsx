// FileName: LibrarySong.js

import React from "react";
const LibrarySong = ({
    song,
    songs,
    setCurrentSong,
    audioRef,
    isPlaying,
    setSongs,
    id,
}) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        //active
        const newSongs = songs.map((song) => {
            if (song._id === id) {
                return {
                    ...song,
                    active: true,
                };
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        //check if song is playing
        if (isPlaying) audioRef.current.play();
    };
    return (
        <div
            onClick={songSelectHandler}
            className={`library-song ${song.active ? "selected" : ""}`}
        >
            <img src={require('../../assets/images/music.png')} alt={song.name} />
            <div className="song-description">
                <h3>{song.title}</h3>
            
            </div>
        </div>
    );
};

export default LibrarySong;
