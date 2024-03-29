const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
var cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();

require("./config/database");

const userRoute = require("./routes/api/users");
const itemRoute = require("./routes/api/items");
const listRoute = require("./routes/api/list");

app.use(logger("dev"));
app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", userRoute);
app.use("/api/items", itemRoute);
app.use("/api/list", listRoute);

// app.use(require('./config/auth'));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
