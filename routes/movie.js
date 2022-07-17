const express = require('express');
const Movie = require('../database/movies');

const routeHandler = express.Router();


async function getAllMovie (req,res){
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

async function addMovie(req,res){
    let data = req.body;
    console.log(data);
      
       await Movie.insertMany(data);
       return res.send(data);
}

async function pagenated(req,res){
    const {page , per_page} = req.query;
    if(page){
    let data = await Movie.find().skip((page-1)*per_page).limit(per_page);
    if(data.length!==0){
    return res.send(data);
    }
    return res.send({error : 'Page does not exist'})
    }
    return res.send({error : 'Something went wrong'})
    
}


routeHandler.post('/',addMovie)
routeHandler.get('/all',getAllMovie)
routeHandler.get('/',pagenated)


module.exports = routeHandler;