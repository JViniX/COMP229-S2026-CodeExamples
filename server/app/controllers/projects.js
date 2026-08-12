const { getFirestore } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');

const bucket = getStorage().bucket();
const db = getFirestore();

let { projectModel } = require('../models/projectsFb');

const deleteStorageImage = async (imagePath) => {
    if (!imagePath) {
        return;
    }

    try {
        await bucket.file(imagePath).delete();
    } catch (error) {
        if (error.code !== 404) {
            console.log('Error deleting Storage image:', error);
        }
    }
};

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

        const existingProject = docSnapshot.data() || {}; // Get a instance of the project object.
        await docRef.update(updatedProject); // Update in the database

        // Delete the old image from Firebase Storage if it exists and is different from the new one
        if (existingProject.imagePath && existingProject.imagePath !== updatedProject.imagePath) {
            await deleteStorageImage(existingProject.imagePath);
        }

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
        const existingProject = docSnapshot.data() || {}; // Get a instance of the project object.

        await docRef.delete();

        // Delete the image from Firebase Storage if it exists
        if (existingProject.imagePath) {
            await deleteStorageImage(existingProject.imagePath);
        }

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