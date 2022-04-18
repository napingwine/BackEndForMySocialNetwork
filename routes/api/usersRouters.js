const router = require("express").Router();

// Controllers
const { getUsers, getUserByID, followUser, unFollowUser, uploadMyAvatar} = require("../../app/controllers/api/usersController");

// Routes
router.get("/", getUsers);
router.get("/profile/:userID", getUserByID);
router.post("/follow/:userID", followUser);
router.delete("/follow/:userID", unFollowUser);
router.post("/uploadMyAvatar", uploadMyAvatar)

module.exports = router;