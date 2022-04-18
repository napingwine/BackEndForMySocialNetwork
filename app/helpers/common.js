const jwt = require("jsonwebtoken");
const config = require("config");

exports.randomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

exports.getJwtDataByToken = (req) => {
  try {
    let token = req.header('Authorization').split(' ')[1];
    return jwt.verify(token, config.get("jwtSecret"));
  } catch (e) {
    console.log(e.message);
    return e.message;
  }
};

exports.pagination = (page, limit, data) => {
  page = page || 1;
  if (limit !== undefined) {
    limit = limit;
  } else if (limit === undefined) {
    (data.length <= 5) ? limit = 5 : limit = data.length;
  }
  let bd = [];
  for (let i = 0; i < limit; i++) {
    if (((limit * (page - 1)) + i) < data.length) {
      bd.push(data[(limit * (page - 1)) + i]);
    }
  }
  return bd;
};

exports.deleteAllUsersFromDB = async () => {
  let users = await user.find();
  for (let i = 0; i < users.length; i++) {
    user.deleteOne({ _id: users[i]._id }, function (err) {
      if (err) {
        console.error(err)
      } else (
        console.log('success')
      )
    })
  }
};