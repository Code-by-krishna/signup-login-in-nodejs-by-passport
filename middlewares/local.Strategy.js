var passport = require("passport");
var LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const User = require("../models/users.model");

const localStrategy = new LocalStrategy({
    usernameField: 'email',
},async (email,password,done) => {
    try {
    let user = await User.findOne({
        where: {
            email: email,
        }
    });

    if(!user) {
        return done(null, false, { msg: "Email id is invalid!!"});
    }

    let isSamepass = await bcrypt.compare(password, user.password);

    if(!isSamepass) {
        return done(null, false, {msg: "assword is invalid"});
    }
    return done(null, user);
   }
   catch(err) {
    console.log(err);
    return done(err);
   }
});

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(async function(id, done) {
    let user = await User.findByPk(id);
    if(!user) {
        return done(null, false);
    }
    return done(null, user);
});



module.exports = localStrategy;