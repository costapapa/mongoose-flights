const express = require('express');
const router = express.Router();

//creating a controller module

const flightsCtrl = require('../controllers/flights')

//get route /flights/new
router.get('/new', flightsCtrl.new);

//post route /flights
router.post('/', flightsCtrl.create);

//get rout for /movies
router.get('/', flightsCtrl.index)

module.exports = router;
