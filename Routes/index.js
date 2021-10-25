
const express = require("express");

const router = express.Router();

console.log("router loaded");

// // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })


const controller = require('../Controller');

router.get("/", controller.showContact);


router.post('/create-contact', controller.createContact)
router.get('/delete-contact', controller.deleteContact);


module.exports = router;