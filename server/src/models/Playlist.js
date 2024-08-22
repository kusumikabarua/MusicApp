const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const playListSchema = new mongoose.Schema({
	title: { type: String, required: true },
	user: { type: ObjectId, ref: "user", required: true },
	songs: { type: Array, default: [] },
});


const PlayList = mongoose.model("playList", playListSchema);

module.exports = { PlayList };