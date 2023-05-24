const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index
}

async function index(req, res) {
    let flights = await Flight.find();
    res.render('flights', { flights })
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    await Flight.create(req.body);
    res.redirect('/flights')
}
