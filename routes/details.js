const express = require('express');
const router = express.Router();

const detailsCtrl = require('../controllers/details')


router.get('/flights/details', function(req, res, next) {
    res.render('flights/details', { title: 'Details' });
});

router.get('flights/:id', detailsCtrl.create)

module.exports = router
