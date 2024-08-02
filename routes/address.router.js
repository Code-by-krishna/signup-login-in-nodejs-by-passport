const express = require("express");
const router = express.Router();
const useraddress = require("../controllers/address.controller") ;

router.get('/address',useraddress.usersList);
router.get('/create/address',useraddress.showAddressForm);
router.post('/create/address',useraddress.addAddress);

module.exports = router;