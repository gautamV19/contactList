const Contact = require("../Models/contactSchema");

module.exports.showContact = async (req, res) => {
    const contacts = await Contact.find({}).sort("-createdAt");

    // console.log("Contacts list", contacts);

    return res.render("home", {
        title: "My Contacts",
        contact_list: contacts,
    });
}

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

module.exports.deleteContact = async (req, res) => {
    const phone = req.query.phone;

    console.log("delete contact", phone);

    try {
        let contact = await Contact.findOne({ phone: phone });

        await contact.remove();

        console.log("deleted succesfully");

    } catch (err) {
        console.log("Error in deleting contact", err);
    }

    return res.redirect("back");
}