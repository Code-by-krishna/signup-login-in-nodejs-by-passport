const express = require("express");
const ejs = require('ejs');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require("passport");
const { query, validationResult } = require('express-validator');
//routes
const authrouter = require("./routes/auth.router");
const usersrouter = require("./routes/user.router");
const addressrouter = require("./routes/address.router");


const isAuthenticated = require("./middlewares/isAuthanticated");
const localStrategy = require("./middlewares/local.Strategy");

//instance of express.
const app = express();


//ejs engine setup
app.set('view engine', 'ejs');

//middlewarrrews
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
); 
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//local strategy,
passport.use(localStrategy);

//route middlewarres
app.use("/auth",authrouter);

//todo for authantication.
app.use(isAuthenticated);

app.use('/users',usersrouter);
app.use('/',addressrouter);





app.listen(3000,()=> console.log("Server Started!!"));