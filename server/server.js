const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

const routes = require("./routes/routes.js")(app, fs);

app.listen(1234, () => {
  console.log("listening at 1234");
});
