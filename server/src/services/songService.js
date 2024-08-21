const Song = require("../models/Song");
const saveSong = async (songData) => {
  try {
    console.log("Create");
    const song = await Song.create(songData);
    return song;
  } catch (error) {
    throw error;
  }
};
const getAllSongs = async () => {
  try {
    let songs = await Playlist.find();
    return songs;
  } catch (error) {
    throw error;
  }
};


module.exports = {
    saveSong,
    getAllSongs,
};
