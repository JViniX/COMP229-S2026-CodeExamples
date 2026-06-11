let ProjectsModel = require('../models/projects');

module.exports.add = async function (req, res, next) {
    try {
        let newProject = ProjectsModel(req.body);

        let result = await ProjectsModel.create(newProject);

        console.log(result);

        res.json({
            success: true,
            message: "Project added successfully.",
            data: result
        });


    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.getById = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Bye, everyone!")
}

module.exports.update = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Bye, everyone!")
}

module.exports.delete = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Bye, everyone!")
}

module.exports.getAll = async function (req, res, next) {
    try {
        let list = await ProjectsModel.find({});

        res.json({
            success: true,
            message: "Project list retrieved successfully.",
            data: list
        });
    } catch (error) {
        console.log(error);
        next(error);
    }

}