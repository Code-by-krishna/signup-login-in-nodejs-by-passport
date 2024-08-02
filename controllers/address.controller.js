const User_address = require("../models/address.model");

class useraddress {
    static async usersList(req,res) {
        const address = await User_address.findAll({
            where: {
                id: req.user.id
            }
        });
        if(!address) {
            return res.redirect('/users/profile');
        }
        return res.render('address',{address: address});
    }

    static showAddressForm(req,res) {
        return res.render('createaddress');
    }

    static async addAddress(req,res) {
        try{
        const body = req.body;

        const user_address = new User_address();
        
        user_address.id = req.user.id;
        user_address.city = body.city;
        user_address.country = body.country;
        user_address.state = body.state;
        await user_address.save();
        return res.redirect("/users/profile");
        }
        catch(err) {
            console.log(err);
            return res.redirect("/create/address");
        }
    }
}

module.exports = useraddress;