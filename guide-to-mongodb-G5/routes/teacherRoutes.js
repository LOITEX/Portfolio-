const express = require('express');
const teacherController = require('../controllers/teacherController');
const router = express.Router();
router.get('/', teacherController.getAllteacher);
router.get('/:id', teacherController.getteacherById);
router.get('/', teacherController.createTeacher);
router.put('/:id', teacherController.updateTeacher);
router.delete('/id', teacherController.deleteTeacher);
module.export = router;