const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/reviews.js');

router.get('/:nameOrId', ctrl.get);
router.post('/', ctrl.post);
router.put('/:nameOrId', ctrl.put);
router.delete('/:nameOrId', ctrl.delete);
// router.post("/", ctrl.update);

module.exports = router;
