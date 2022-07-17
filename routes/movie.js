const express = require('express');
const Movie = require('../database/movies');

const routeHandler = express.Router();


async function getAllMovie (req,res,next){
    let title = req.query.title;
    let rating = req.query.rating;
    if(title !== undefined && rating !== undefined){
      
        let sortTitle = await Movie.find().sort({rating : 1}).sort({title : 1});
        return res.send({
            data : sortTitle,
        })
    }
    if(title!==undefined){
      
        let sortTitle = await Movie.find().sort({title : 1});
        return res.send({
            data : sortTitle,
        })
    }
    if(rating!==undefined){
     
        let sortTitle = await Movie.find().sort({rating : 1});
        return res.send({
            data : sortTitle,
        })
    }
    let movie = await Movie.find();


    return res.send({
      data : movie,
    })
}

async function addMovie(req,res,next){
    let data = req.body;
    console.log(data);
      
       await Movie.insertMany(data);
       return res.send(data);
}


routeHandler.post('/',addMovie)
routeHandler.get('/',getAllMovie)

module.exports = routeHandler;