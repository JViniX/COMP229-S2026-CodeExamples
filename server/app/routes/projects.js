var express = require('express');
var router = express.Router();

let projectsController = require('../controllers/projects');

router.get("/", projectsController.getAll);
router.post("/", projectsController.add);
router.get("/:id", projectsController.getById);
router.put("/:id", projectsController.update);
router.delete("/:id", projectsController.remove);

module.exports = router;