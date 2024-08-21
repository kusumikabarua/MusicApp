const songService = require("../services/songService");
const saveSong = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id;
    console.log("userId", userId);
    const song = await songService.saveSong({
      title,
      description,
      userId,
    });
    return res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    saveSong,
    getAllSongs,
};
