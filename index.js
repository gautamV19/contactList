const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded());

app.use(express.static("assets"));

var contactList = [
  {
    name: "abc",
    phone: "0000000000",
  },
  {
    name: "xyz",
    phone: "0000000000",
  },
  {
    name: "ghi",
    phone: "0000000000",
  },
  {
    name: "pqr",
    phone: "0000000000",
  },
];

app.get("/", (req, res) => {
  return res.render("home", {
    title: "My Contacts",
    contact_list: contactList,
  });
});

app.post("/create-contact", (req, res) => {
  // contactList = [...contactList, req.body];
  contactList.push(req.body);
  return res.redirect("/");
});

app.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("Success on", port);
  }
});

app.get("/delete-contact", (req, res) => {
  res.send("hello from simple server :)");
});
