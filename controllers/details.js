const Flight = require('../models/flight')

async function create(req, res, next) {

    const { id } = req.params
  
    try {
      const flight = await Flight.findById(id)
      console.log(flight)
  
      // Push req.body into movie.reviews
      flight.details.push(req.body)
      
      // Save the parent document
      await details.save()
    } catch (err) {
      console.log('ERROR MESSAGE ->', err.message)
    }
  
    // Redirect to movie show page
    res.redirect(`/flights/${id}`)
  }






module.exports = {
    create
}