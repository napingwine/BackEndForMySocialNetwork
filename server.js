const express = require("express");
const app = express();
const connectToMongoDB = require("./config/db");
const cors = require("cors")
const fileUpload = require("express-fileupload");
const fs = require("fs");

// Accept incoming request
app.use(express.json({ extended: false }));

// Connect to MongoDB
connectToMongoDB();

app.use(cors());
app.use(fileUpload());
app.use(express.static("static"));
// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/password", require("./routes/api/forgotPassword"));
app.use("/api/users", require("./routes/api/usersRouters"));
app.use("/api/profile/:userID", require("./routes/api/usersRouters"));
app.use("/api/follow/:userID", require("./routes/api/usersRouters"));
app.use("/api/myTasks", require("./routes/api/tasksRouters"));

// Run the server
app.listen(3000, () => console.log(`Server running in 3000`));