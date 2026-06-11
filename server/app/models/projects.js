let moogose = require('mongoose');

let projectsModel = moogose.Schema(
    {
        title: String,
        description: String,
        completion: Date,
        image: String
    },
    {
        collection: "projects"
    }
);

// Ensure virtual fields are serialised.
projectsModel.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id
    }
});

module.exports = moogose.model("Projects", projectsModel);