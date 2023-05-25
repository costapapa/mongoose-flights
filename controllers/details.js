const Flight = require('../models/flight')

async function create(req, res, next) {

    const { id } = req.params
  
    try {
      const movie = await Flight.findById(id)
      console.log(Flight)
  
      // Push req.body into movie.reviews
      movie.details.push(req.body)
      
      // Save the parent document
      await details.save()
    } catch (err) {
      console.log('ERROR MESSAGE ->', err.message)
    }
  
    // Redirect to movie show page
    res.redirect(`/movies/details`)
  }






module.exports = {
    create
}