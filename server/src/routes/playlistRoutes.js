const express= require("express");
const router = express.Router();
const playlistController =require("../controllers/playlistController")
const authenticateToken =require("../middleware/authenticateToken");
router.post("/createPlaylist",playlistController.createPlaylist);
router.get("/getAllPlaylist",authenticateToken,playlistController.getPlayListByUser);
module.exports =router;