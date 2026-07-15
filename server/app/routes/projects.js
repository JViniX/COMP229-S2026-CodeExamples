var express = require('express');
var router = express.Router();

let projectsController = require('../controllers/projects');
let authController =  require('../controllers/auth');

router.get("/", 
    // authController.validateToken, 
    authController.logToken, 
    projectsController.getAll);
router.post("/",     
    // authController.validateToken, 
    authController.logToken, 
    projectsController.add);
router.get("/:id", authController.validateToken, projectsController.getById);
router.put("/:id", projectsController.update);
router.delete("/:id", projectsController.remove);

module.exports = router;