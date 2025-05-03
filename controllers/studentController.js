const Student = require('../models/student');
const mongoose = require('mongoose');



exports.getAllstudent = async (req, res) => {
    try {
        const students = await Student.find().populate('teacher');
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getstudentsById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('teacher');
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStudent = async (req, res) => {
    const { name, type, grade, teacher } = req.body;

    
    if (!mongoose.Types.ObjectId.isValid(teacher)) {
        return res.status(400).json({ message: "Invalid teacher ID format" });
    }

    try {
        const newStudent = new Student({ name, type, grade, teacher });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateStudents = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
