const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const aYearFromNow = new Date();

const flightSchema = new Schema( {
    airline: {
        type: String,
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
        default: 10
    },
    departs: {
        type: Date,
        default: function() {
            const aYearFromNow = new Date();
            return aYearFromNow.setFullYear(aYearFromNow.getFullYear() +1);
          },
        
    }
})

module.exports = mongoose.model('Flight', flightSchema)