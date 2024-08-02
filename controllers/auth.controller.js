const User = require("../models/users.model");
const db = require("../models/users.model");
const bcrypt = require("bcrypt");
// var flash = require('connect-flash');

class authanticateUser {
    static showsignupForm(req,res) {
        res.render('signup',{msg : req.flash('error')});
    };

    static showloginForm(req,res) {
        res.render('login',{msg : req.flash('info')});
    };

    static async signin(req,res) {
        try {
        let data = req.body;
        // console.log("here",data);
        let hashpassword = await bcrypt.hash(data.password,5);
        // console.log(hashpassword);

        let user = new User();

        user.name = data.name;
        user.email = data.email;
        user.password = hashpassword;
        await user.save();
        req.flash('info', 'User Register successfully!!');
        res.redirect('/auth/login');
        }
        catch(error) {
            console.log(error);
            req.flash("error",'Error occure!!')
            res.redirect("/auth/signup");
        }
        }

    static login(req,res) {
        // console.log("here")
        return res.redirect('/users/profile');
    };
}

module.exports = authanticateUser;