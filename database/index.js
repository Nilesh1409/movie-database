const mongoose = require('mongoose');


async function main() {
    const con = await mongoose.connect('mongodb://localhost:27017/imdb')
    try {
        console.log('connected')
    } catch (error) {
        console.log('error')        
    } 
      
}

module.exports = main;
