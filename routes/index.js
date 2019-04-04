var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user){
    user = req.user;
  }else{
    user = {username:'Guest'};
  }
  
  res.render('index', { title: 'Dashboard', user:user, session:req.session });
});

module.exports = router;
