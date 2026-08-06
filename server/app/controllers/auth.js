const { getAuth } = require("firebase-admin/auth");
const auth = getAuth(); 

let secretkey = process.env.SECRETKEY;

module.exports.validateToken = async function (req, res, next) {
    let token = req.header("authorization") ? req.header("authorization").substr(7) : ""; // Remove "Bearer " prefix

    await auth.verifyIdToken(token, true)
    .then((decodedToken)=>{
        req.auth = decodedToken;
        next();
    }).catch( (error)=>{
        console.log(error);
        res.status(401).json({
            success: false,
            message: error.message.split('.')[0]
        })
    } );
}

module.exports.logToken = async function (req, res, next) {
    console.log(req.headers);
    console.log(req.auth);
    next();
}