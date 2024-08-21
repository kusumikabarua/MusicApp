const Playlist = require("../models/Playlist");
const createPlaylist = async (playlistData) => {
  try {
    console.log("Create");
    const playlist = await Playlist.create(playlistData);
    return playlist;
  } catch (error) {
    throw error;
  }
};
const getAllPlaylist = async (userIdFromToken) => {
  try {
    let playlists = await Playlist.findAll({ userId: userIdFromToken });
    return playlists;
  } catch (error) {
    throw error;
  }
};


module.exports = {
    createPlaylist,
    getAllPlaylist,
};
