require('dotenv').config();
const { cert, getApps, initializeApp } = require("firebase-admin");

module.exports = function () {

    var serviceAccount = JSON.parse(process.env.GCLOUD_SERVICE_KEY);

    // prevents initializeApp() from running twice in the same Node process.
    if (getApps().length > 0) {
        return getApps()[0];
    }

    const app = initializeApp({
        credential: cert(serviceAccount)
    });

    console.log("====> Connected to Firebase.")

    return app;
}

