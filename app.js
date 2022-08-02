const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const dataBase = module.exports = async() => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        await mongoose.connect(process.env.DB_CONNECTION, connectionParams);
        console.log('Connected to database');
    }
    catch (err) {
        console.log('Error connecting to database');
    }
}
//Body Parser
app.use(bodyParser.json());
//Routes
const postRoutes = require('./routes/posts');

app.get('/', (req, res) => {
    res.send('We are homePage');
})
app.use('/posts', postRoutes);


//DataBase
dataBase();


app.listen(3000);