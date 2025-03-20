const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();
router.get('/', studentController.getAllstudent);
router.get('/:id', studentController.getStudentById);
router.get('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/id', studentController.deleteStudent);
module.export = router;