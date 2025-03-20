const student = require('../models/student');
const student = require('../models/student');
exports.getAllstudent = async (req, res) => {
    try{
        const student = await student.find().populate('teacher');
        res.json(student);
    }catch (err) {
        res.status(500).json({ message: err.message});
    }
};
exports.getstudentsById = async (req, res) => {
    try{
        const student = await student.findById(req.params.id).populate('teacher');
        if (!student) return res.status(404).json({ message: 'student not found'});
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};
exports.createStrudent = async (req, res) => {
    const { name, type, grade, teacher,} = req.body;
    try{
        const newStudent = new Pokemon({ name, type, level, teacher });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.updateStudents = async (req, res) => {
    try {
        const student = await student.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        if (!student) returnres.status(404).json({ message: 'student not found'});
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};
exports.getstudentsById = async (req, res) => {
    try{
        const student = await student.findByIdAndDelete(req.params.id);
        if (!student) return res.status(404).json({ message: 'student not found'});
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};