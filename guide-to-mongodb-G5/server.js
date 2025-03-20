const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT ||
app.listen(3000, () =>{
    console.log('server running at http://localhost:3000/api/v1')
});