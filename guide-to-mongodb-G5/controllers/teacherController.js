const teacher = require('../models/teacher');
const teacher = require('../models/teacher');
exports.getAllteacher = async (req, res) => {
    try{
        const teacher = await teacher.find().populate('teacher');
        res.json(teacher);
    }catch (err) {
        res.status(500).json({ message: err.message});
    }
};
exports.getteachersById = async (req, res) => {
    try{
        const teacher = await teacher.findById(req.params.id).populate('teacher');
        if (!teacher) return res.status(404).json({ message: 'teacher not found'});
        res.json(teacher);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};
exports.createStrudent = async (req, res) => {
    const { name, badges,} = req.body;
    try{
        const newteacher = new Pokemon({ name, type, level, teacher });
        await newteacher.save();
        res.status(201).json(newteacher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
exports.updateteachers = async (req, res) => {
    try {
        const teacher = await teacher.findByIdAndUpdate(req.params.id, req.body, {new: true,});
        if (!teacher) returnres.status(404).json({ message: 'teacher not found'});
        res.json(teacher);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};
exports.getteachersById = async (req, res) => {
    try{
        const teacher = await teacher.findByIdAndDelete(req.params.id);
        if (!teacher) return res.status(404).json({ message: 'teacher not found'});
        res.json(teacher);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};