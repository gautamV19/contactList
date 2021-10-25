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

const express = require("express");

const router = express.Router();

console.log("router loaded");

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })



router.get("/", (req, res) => {
    return res.render("home", {
        title: "My Contacts",
        contact_list: contactList,
    });
});

const controller = require('../Controller');

router.post('/create-contact', controller.createContact)
router.get('/delete-contact', controller.deleteContact);


module.exports = router;