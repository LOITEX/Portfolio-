require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


const { connectDB } = require('./config/db');
connectDB();


app.use(express.json());
app.use(cors());


const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the API');
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
