const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
//let data = null; 
//require('../users');
/* GET users listing. */
const phonebookSchema = new mongoose.Schema({
  firstname:String,
  laststname:String,
  phonenumber:String
});

const User = mongoose.model('User', phonebookSchema);

router.get('/', async function(req, res, next) {

 const user = await User.find();
  res.json(user);
});

router.get('/search/:search', async function(req, res, next) {
  const user = await User.find();
  res.json(user);
});

router.get('/:id', async function(req, res, next) {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post('/', async function(req, res, next) {
  let user = new User({
    firstname:req.body.firstname,
    laststname:req.body.laststname,
    phonenumber:req.body.phonenumber
  });
  let result = await user.save();
  res.json({"status":'ok'});
});

router.put('/:id', async function(req, res, next) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    firstname:req.body.firstname,
    laststname:req.body.laststname,
    phonenumber:req.body.phonenumber
  },
    {new:true}
  );
  res.json({"update":'ok'});
});




module.exports = router;
