var express = require('express');
var router = express.Router();
const boxesCtrl = require('../controllers/boxes')

//Home page after log in
router.get('/', boxesCtrl.index);

router.post('/', boxesCtrl.create)

router.get('/:id', boxesCtrl.show)

router.delete('/:id', boxesCtrl.delete)

router.put('/:id', boxesCtrl.update)

router.get('/:id/edit', boxesCtrl.edit)

module.exports = router;
