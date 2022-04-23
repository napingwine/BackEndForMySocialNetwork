const { getJwtDataByToken } = require("../../helpers/common.js");
let Task = require("../../models/Task.js");

exports.getMyTasks = async (req, res) => {
  let myTasks = await getMyTasksFromDB(req);
  if (myTasks === "jwt malformed") {
    return res.status(500).json("jwt malformed");
  }
  if (myTasks === "jwt expired") {
    return res.status(500).json("jwt expired");
  }
  try {
    return res.status(200).json(myTasks);
  } catch (e) {
    console.log(e)
    return res.result(500).json("error")
  }
};

exports.setNewTask = async (req, res) => {
  try {
    let userID = getJwtDataByToken(req).user.id;
    let newTask = new Task({
      userID: userID,
      ...req.body
    });
    newTask.save().then(res123 => {
      return res.status(200).json(newTask)
    }).catch(e => {
      console.log(e)
      return res.status(450).json("some Error")
    })
  } catch (e) {
    console.log(e)
    return res.status(450).json("some Error")
  }
};

exports.deleteTask = async (req, res) => {
  try {
    Task.deleteOne(req.body, function (err) {
      if (err) {
        console.error(err)
      } else (
        console.log('success, task deleted')
      )
    })
    return res.status(200).json("task deleted");
  } catch (e) {
    console.log(e);
    return res.status(450).json("some Error");
  }
};

exports.updateTask = async (req, res) => {
  try {
    let taskID = req.body._id;
    let update = req.body.data;
    console.log(update)
    Task.findByIdAndUpdate(taskID, update).then(someResult => {
      console.log('success, tusk updated')
      return res.status(200).json('task status updated')
    })
  } catch (e) {
    console.error(e);
    return res.status(450).json('some error');
  }
};

const getMyTasksFromDB = async (req) => {
  try {
    let user = getJwtDataByToken(req)
    switch (user) {
      case "jwt malformed": {
        return "jwt malformed"
      };
      case "jwt expired": {
        return "jwt expired"
      };
      default: {
        let userID = user.user.id
        return await Task.find({ userID: userID });
      };
    }
  } catch (e) {
    console.log("getMyTasksFromBD error:", e.message);
    return e;
  }
};