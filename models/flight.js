const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
      type: Date,
    }
}, );


const aYearFromNow = new Date();

const flightSchema = new Schema( {
    airline: {
        type: String,
        default: 'American',
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        default: function() {
            return min 
        }
    },
    departs: {
        type: Date,
        default: function() {
            const aYearFromNow = new Date();
            return aYearFromNow.setFullYear(aYearFromNow.getFullYear() +1);
          },   
    },
    destination:[destinationSchema]
})

module.exports = mongoose.model('Flight', flightSchema)