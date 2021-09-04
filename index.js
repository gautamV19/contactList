const express = require("express");
const path = require("path");
const port = 8000;

const db = require("./config/mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded());

app.use(express.static("assets"));

var contactList = [
  {
    name: "abc",
    phone: "0000000123",
  },
  {
    name: "xyz",
    phone: "0000002321",
  },
  {
    name: "ghi",
    phone: "0021321000",
  },
  {
    name: "pqr",
    phone: "0000713100",
  },
];

app.get("/", (req, res) => {
  return res.render("home", {
    title: "My Contacts",
    contact_list: contactList,
  });
});

app.get("/delete-contact", (req, res) => {
  // console.log(req.query);
  // let phone = req.query.phone;
  // console.log("phone",phone);

  // contactList= contactList.filter((i)=> {
  //   console.log(i.phone,req.query.phone);
  //   return (i.phone!=req.query.phone) ? i : null;
  // })

  const phone = req.query.phone;
  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactIndex !== -1) {
    contactList.splice(contactIndex, 1);
  }

  return res.redirect("back");
});

app.post("/create-contact", (req, res) => {
  console.log("Inside create contact", req);
  console.log("Inside create contact", req.body);
  // contactList = [...contactList, req.body];
  // contactList.push(req.body);
  return res.redirect("/");
});

app.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("Success on", port);
  }
});

// <!-- <%= "/delete-contact/" + <%= i.phone %> %> -->
