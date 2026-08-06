const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

let { userModel } = require('../models/usersFb');

module.exports.add = async function (req, res, next) {
    try {
        console.log(req.body);
        let newUser = userModel(req.body);
        // newUser.owner = req.auth.id || "";

        let result = await db.collection('users').add(newUser);
        console.log(result);

        res.json({
            success: true,
            message: "User added successfully.",
            data: { id: result.id, ...newUser }
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}