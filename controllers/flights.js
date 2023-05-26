const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
    update
}

async function index(req, res) {
    let flights = await Flight.find();
    res.render('flights', { flights })
}

function newFlight(req, res) {
    res.render('flights/new', { errorMsg: '' })
}

async function create(req, res) {
    const { id } = req.params
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    await Flight.create(req.body);
    res.redirect(`/flights/${id}`)
}

async function show(req, res, next) {
    try {
      const { id } = req.params
      const flight = await Flight.findById(id)
      console.log(flight.destination)
      const destinations = flight.destination
      
    //   for(const key in flight.toObject()){
    //     console.log(`${key[0].toUpperCase() + key.substring(1)}: ${flight[key]}`)
    //   }
  
      res.render('flights/show', {
        flight,
        destinations,
      })
    } catch (err) {
      console.log('ERROR MESSAGE ->', err.message)
      next() // 
    }
  }

  async function update(req, res, next) {
    try{
        const { id } = req.params
        const flight = await Flight.findById(id)
        flight.destination.push(req.body)
        await flight.save()
    console.log(flight)
    res.redirect(`/flights/${id}`)
    } catch (err) {
        console.log('ERROR Message', err.message)
    }
    
  }

