const Contact = require("../Models/contactSchema");

module.exports.createContact = async (req, res) => {
    console.log("create contact", req.body);

    const { name, phone } = req.body;

    try {

        const userExist = await Contact.findOne({ phone: phone });

        if (userExist) {
            console.log("Number already exist");
            // return res.status(422).json({ err: "Number already exist" });
        }
        else {
            await Contact.create(req.body);
            console.log("Contact added succesfully");
            // res.status(500).json("Contact added succesfully");
        }

    } catch (err) {
        console.log("create contact error", err);
    }

    return res.redirect("back");
    // console.log("create contact", req.query);
}

module.exports.deleteContact = (req, res) => {
    console.log("delete contact", req.query.phone);
    return res.redirect("back");
}