const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/users.controller") ;


router.get('/profile',usercontroller.userProfile);
router.get('/logout',usercontroller.userlogout);

module.exports = router;