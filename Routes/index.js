
const express = require("express");

const router = express.Router();

const controller = require('../Controller');

router.get("/", controller.showContact);


router.post('/create-contact', controller.createContact)
router.get('/delete-contact', controller.deleteContact);


module.exports = router;