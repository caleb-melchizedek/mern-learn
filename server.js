const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//bodyParser Middleware
app.use(bodyParser.json())

// DB Config
const db = require ('./config/key').mongoURI;

//connect to mongodb
mongoose.connect(db, {useNewUrlParser:true,useUnifiedTopology:true}).then( ()=> console.log('MongoDB Connected...')).catch(err=> console.log(err));

app.use('/api/items', items);

const port =  process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

