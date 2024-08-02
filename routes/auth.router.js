const express = require("express");
const router = express.Router();
const authanticateUser = require("../controllers/auth.controller");
const passport = require("passport");
const { body, validationResult } = require('express-validator');

router.get("/signup",authanticateUser.showsignupForm);
router.get("/login",authanticateUser.showloginForm);

router.post("/signup",
    body('name').notEmpty(),
    body('email').notEmpty().isEmail(),
    body('password').notEmpty(),
(req,res,next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next();
      }
      req.flash("error",'All feild must be required!!');
      return res.redirect('/auth/signup');
    
    
},authanticateUser.signin);
router.post("/login",passport.authenticate('local',{
    failureRedirect: '/auth/login',
    failureFlash: true,
}),authanticateUser.login);

module.exports = router;
