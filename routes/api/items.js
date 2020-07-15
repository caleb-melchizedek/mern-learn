const express = require('express');
const router = express.Router();

//items Model
const Item = require('../../models/item');

// @route GET api/items
//@desc Get All Items
//@Access Public
router.get('/', (req, res)=>{
	Item.find().sort({date:-1})
	.then(items =>res.json(items))
});

// @route POST api/items
//@desc Create a Post 
//@Access Public
router.post('/', (req, res)=>{
	const newItem = new Item({
		name: req.body.name
	})
	newItem.save().then(item => res.json(item).catch(err=>console.log(err)));
});



module.exports = router