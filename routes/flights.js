const express = require('express');
const router = express.Router();

//creating a controller module

const flightsCtrl = require('../controllers/flights')

//get route /flights/new
router.get('/new', flightsCtrl.new);



//get rout for /movies
router.get('/', flightsCtrl.index)

// router.get('/:id', flightsCtrl.show)
router.get('/:id', flightsCtrl.show)


router.put('/:id', flightsCtrl.update)

//post route /flights
router.post('/', flightsCtrl.create);





//create update


module.exports = router;
