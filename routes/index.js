var express = require('express');
var router = express.Router();

const passport = require('passport')


//Login page to get to the homepage
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Post-Box' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
))

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/boxes',
    failureRedirect: '/index'
  }
))

router.get('/logout', function(req, res){
  req.logout(function(err){
    if(err) return next(err)
    res.redirect('/')
  })
})

module.exports = router;
