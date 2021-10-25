const Contact = require("../Models/contactSchema");

module.exports.createContact = (req, res) => {
    console.log("create contact", req.body);



    return res.redirect("back");
    // console.log("create contact", req.query);
}

module.exports.deleteContact = (req, res) => {
    console.log("delete contact", req.query.phone);
    return res.redirect("back");
}