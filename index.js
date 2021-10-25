const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });

const express = require("express");
const path = require("path");
const port = 8000;

const app = express();

require("./config/mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded());

app.use(express.static("assets"));

app.post("/create-contact", (req, res) => {

  console.log(req.xhr);
  console.log(req.params);
  console.log(req.params);

  return res.redirect("/");
});



app.use("/", require("./Routes/index"));

app.listen(port, (error) => {
  if (error) {
    console.log("error", error);
  } else {
    console.log("Success on", port);
  }
});


/*

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



// <!-- <%= "/delete-contact/" + <%= i.phone %> %> -->

*/