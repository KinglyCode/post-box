var express = require('express');
var router = express.Router();

//Home page after log in
router.get('/', function(req, res, next) {
    res.render('boxes', { title: 'Home Page' });
  });

module.exports = router;
