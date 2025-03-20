const mongoose = require('mongoose');
const studentSchema = mongoose.studentSchema({
    name: {type: String, required: true, unique: true },
    type: {type: String, required: true},
    grade: {type: Number, default: 1 - 6},
    teacher: {type: mongoose.Schema. Types.ObjectID, ref: 'teacher'},
});
module.exports = mongoose.model('Pokemon', pokemonSchema);