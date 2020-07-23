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
//@desc Create an Item 
//@Access Public
router.post('/', (req, res)=>{
	const newItem = new Item({
		name: req.body.name
	});
	newItem.save().then(item => res.json(item).catch(err=>console.log(err)));
});

// @route DELETE api/items
//@desc Delete an Item 
//@Access Public
router.delete('/:id', (req, res)=>{
	item.findById(req.params.id)
	.then(item=>{item.remove()
		.then(()=>res.json({success:true}))
	})
	.catch(err=>res.status(404).json({success:false}));
});



module.exports = router