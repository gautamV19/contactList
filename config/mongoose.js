//require the library
const mongoose = require("mongoose");
// connect to database
mongoose.connect("mongobd://localhost/contacts_list_db");
// acqure the connection
const db = mongoose.connection;
//error
db.on("error", console.error.bind(console, "Error connacting to db"));
//success
db.once("open", function () {
  console.log("Successfully connected to db");
});
