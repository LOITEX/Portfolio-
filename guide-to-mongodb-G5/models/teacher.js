const mongoose = require('mongoose');
const trainerSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    badges: {type: Number, default: 0},
});
module.exports = mongoose.model('teacher', teacherSchema)