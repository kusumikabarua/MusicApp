const playlistService = require("../services/playlistService");
const createPlaylist = async (req, res) => {
  try {
    const { title, description,songs } = req.body;
    const userId = req.user.id;
    console.log("userId", userId);
    const playlist = await playlistService.createPlaylist({
      title,
      description,
      userId,
      songs
    });
    return res.status(201).json(playlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getPlayListByUser = async (req, res) => {
  try {
    const userId = req.user.id;
   
    const playlists = await playlistService.getPlayListByUser(userId);
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
 createPlaylist,
 getPlayListByUser,
};