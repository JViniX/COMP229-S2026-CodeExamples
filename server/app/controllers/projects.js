const { getFirestore } = require('firebase-admin/firestore');
const db = getFirestore();

let { projectModel } = require('../models/projectsFb');

module.exports.add = async function (req, res, next) {
    try {
        let newProject = projectModel(req.body);
        // newProject.owner = req.auth.id || "";

        let result = await db.collection('projects').add(newProject);
        console.log(result);

        res.json({
            success: true,
            message: "Project added successfully.",
            data: { id: result.id, ...newProject }
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.getById = async function (req, res, next) {
    try {
        let projectId = req.params.id;
        let project = await db.collection('projects').doc(projectId).get();

        if (!project.exists) {
            throw new Error("Project not found.");
        }

        res.json({
            success: true,
            message: "Project retrieved successfully.",
            data: { id: project.id, ...project.data() }
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.update = async function (req, res, next) {
    try {
        let projectId = req.params.id;
        let updatedProject = projectModel(req.body);

        let docRef = await db.collection('projects').doc(projectId);
        let docSnapshot = await docRef.get();

        if (!docSnapshot.exists) {
            throw new Error(`Project not updated. Are you sure it exists?`);
        }

        await docRef.update(updatedProject)
        console.log("Updated successfully.");

        res.json({
            success: true,
            message: "Project updated successfully."
        });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.remove = async function (req, res, next) {
    try {
        let projectId = req.params.id;

        let docRef = await db.collection('projects').doc(projectId);
        let docSnapshot = await docRef.get();

        if (!docSnapshot.exists) {
            throw new Error(`Project not updated. Are you sure it exists?`);
        }

        await docRef.delete();

        res.json({
            success: true,
            message: "Project deleted successfully."
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.getAll = async function (req, res, next) {
    try {
        let snapshot = await db.collection('projects').get();
        let list = [];

        snapshot.forEach(doc => {
            list.push({ 
                id: doc.id, 
                ...doc.data() 
            })
        });

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