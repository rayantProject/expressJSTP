const express = require('express');
const router = express.Router();
const {getStuff, createStuff, getOneStuff, deleteStuff, putStuff} = require('../controllers/stuffController');
const auth = require('../middleware/auth');

router.get('/',auth, getStuff);

router.post('/',auth, createStuff);

router.get('/:id',auth, getOneStuff);

router.put('/:id',auth, putStuff);

router.delete('/:id',auth, deleteStuff );



module.exports = router;