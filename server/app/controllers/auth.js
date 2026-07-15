let UsersModel = require('../models/users');
let jwt = require('jsonwebtoken');
let { expressjwt } = require('express-jwt');

let secretkey = process.env.SECRETKEY;

module.exports.signin = async function (req, res, next) {
    try {
        console.log(req.body);
        let user = await UsersModel.findOne({ "email": req.body.email });

        if (!user) {
            throw new Error("User not found.");
        }
        if (!user.authenticate(req.body.password)) {
            throw new Error("Wrong credentials");
        }

        let payload = {
            id: user._id
        }

        // Generates the token
        let token = jwt.sign(payload, secretkey, {
            algorithm: 'HS512',
            expiresIn: "20min"
        });


        // Sends the token in the body of the response to the client.
        res.json(
            {
                success: true,
                message: "User authenticated successfully.",
                token: token
            })

    } catch (error) {
        console.log(error);
        next(error);

    }
}