var express = require('express');
var router = express.Router();
const boxesCtrl = require('../controllers/boxes')
const isLoggedIn = require('../config/auth')

//Home page after log in
router.get('/', boxesCtrl.index);

router.post('/', isLoggedIn, boxesCtrl.create)

router.get('/:id', boxesCtrl.show)

router.delete('/:id', isLoggedIn, boxesCtrl.delete)

router.put('/:id', boxesCtrl.update)

router.get('/:id/edit', isLoggedIn, boxesCtrl.edit)

module.exports = router;
