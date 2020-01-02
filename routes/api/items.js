const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

//@route POST api/items
//@desc create a post
//@access public
router.get('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

module.exports = router;