class usercontroller {
    static userProfile(req,res) {
        console.log(req.user);
        res.render('Profile', { user: req.user });
    }

    static userlogout(req,res) {
        req.logout((err) => {
            if (err) {
                console.log(err);
                return next(err);
            }
            req.flash('info','User logout Successfully!!');
            res.redirect('/auth/login');
        })
    }
}

module.exports = usercontroller;