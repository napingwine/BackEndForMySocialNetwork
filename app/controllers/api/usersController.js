const user = require("./../../models/User");
const { getJwtDataByToken, pagination } = require("../../helpers/common.js");

exports.getUsers = async (req, res) => {
  try {
    const jwtData = await getJwtDataByToken(req);
    if (jwtData === "jwt expired") {
      return res.status(250).json("jwt expired");
    }
    let users = await user.find();
    let totalUsers = users.length;
    //get users with query parameters: page & limit
    users = pagination(req.query.page, req.query.limit, users);
    //check if is subscribed
    for (let i = 0; i < users.length; i++) {
      users[i].followers.includes(jwtData.user.id)
        ? users[i].followed = true
        : users[i].followed = false
    }
    let data = ({
      users,
      totalUsers
    })
    return res.status(200).json(data)
  } catch (e) {
    console.log(e)
    return res.status(450).json("can't find users")
  }
};

exports.getUserByID = async (req, res) => {
  try {
    return res.status(200).json(JSON.stringify(await user.findById(req.params.userID)))
  } catch (e) {
    console.log(e);
    return res.status(450).json('user not found');
  }
};

exports.followUser = async (req, res) => {
  try {
    const jwtData = await getJwtDataByToken(req);
    let followedUserFromDB = await user.findById(req.params.userID);
    if (followedUserFromDB.followers.indexOf(jwtData.user.id) > 0) {
      return res.status(205).json('user already followed');
    }
    followedUserFromDB.followers.push(jwtData.user.id);
    user.updateOne({ _id: req.params.userID },
      { followers: followedUserFromDB.followers },
      () => { e => { e ? console.log(e) : console.log("updated", followedUserFromDB) } });
    return res.status(200).json('follow user');
  } catch (e) {
    console.log(e);
    return res.status(450).json('can not follow user');
  }
};

exports.unFollowUser = async (req, res) => {
  try {
    const jwtData = await getJwtDataByToken(req);
    let followedUserFromDB = await user.findById(req.params.userID);
    followedUserFromDB.followers.filter(id => id !== jwtData.user.id);
    user.updateOne({ _id: req.params.userID },
      { followers: followedUserFromDB.followers.filter(id => id !== jwtData.user.id) },
      () => { e => { e ? console.log(e) : console.log("updated", followedUserFromDB) } });
    return res.status(200).json('follow user');
  } catch (e) {
    console.log(e);
    return res.status(450).json(`can't unfollow user`);
  }
};

exports.uploadMyAvatar = async (req, res) => {
  try {
    let imageFile = req.files.file;
    imageFile.mv(`static/${req.files.file.name}`, function (err) {
      if (err) {
        return res.status(500).send(err)
      }
      res.json({ file: `public/${req.files.file.name}` })
    })
  } catch (e) {
    console.log(e)
    res.status(500).json("error on sending file request")
  }

};