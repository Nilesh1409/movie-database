const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({

    title : {type : String, require : true },
    rating : {type : Number, require : true},
    img : [String]
})

const Movie = mongoose.model('movie',movieSchema);


module.exports = Movie;