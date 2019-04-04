var express = require('express');
var router = express.Router();

var  passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.post('/register', function(req, res, next){

});
router.get('/login', function(req, res, next) {
  res.render('login',{message:req.flash('info_message')});
});
router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/users/login',
                                   failureFlash: false })
);
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('info_message', 'You are logged out');  
  res.redirect('/users/login');
//  req.session.destroy();

});
module.exports = router;
