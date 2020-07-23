const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const items = require('./routes/api/items');

const app = express();

//bodyParser Middleware
app.use(bodyParser.json())
// DB Config
const db = require ('./config/key').mongoURI;

//connect to mongodb
mongoose.connect(db, {useNewUrlParser:true,useUnifiedTopology:true})
				.then( ()=> console.log('MongoDB Connected...'))
				.catch(err=> console.log(err));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  next();
});

app.use('/api/items', items);

//Serve static assets if in production
if (process.env.node_env === 'production'){
	//Set static folder
	app.use(express.static(client/build))

	app.get('*', (req,res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port =  process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));

