const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views "));

app.get("/", (req, res) => {
  return res.render("home");
});

app.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("Success on", port);
  }
});
