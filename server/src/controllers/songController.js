const songService = require("../services/songService");
const saveSong = async (req, res) => {
  try {
    const { title, songUrl } = req.body;
   
    const song = await songService.saveSong({
      title,
      songUrl,
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
