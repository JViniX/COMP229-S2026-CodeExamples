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

module.exports.getById = async function (req, res, next) {
    try {
        let projectId = req.params.id;
        let project = await ProjectsModel.findOne({ _id: projectId });

        res.json({
            success: true,
            message: "Project retrieved successfully.",
            data: project
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.update = async function (req, res, next) {
    try {
        let projectId = req.params.id;
        let updatedProject = ProjectsModel(req.body);
        updatedProject._id = projectId;

        let result = await ProjectsModel.updateOne({ _id: projectId }, updatedProject);
        console.log(result);

        if (result.modifiedCount > 0) {
            res.json({
                success: true,
                message: "Project updated successfully."
            });
        } else {
            throw new Error('Project not updated. Are you sure it exists?');
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let projectId = req.params.id;

        let result = await ProjectsModel.deleteOne({ _id: projectId });
        console.log(result);

        if (result.deletedCount > 0) {
            res.json({
                success: true,
                message: "Project deleted successfully."
            });
        }else {
            throw new Error('Project not deleted. Are you sure it exists?');
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
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