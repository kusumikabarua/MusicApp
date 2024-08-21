const express= require("express");
const router = express.Router();
const songController =require("../controllers/songController")
const authenticateToken =require("../middleware/authenticateToken");
router.post("/saveSong",songController.saveSong);
router.get("/getAllSongs",authenticateToken,songController.getAllSongs);
module.exports =router;