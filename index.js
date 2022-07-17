const express = require('express');
const main = require('./database');
const routeHandler = require('./routes/movie');

const app = express();

const logger = (req,res,next)=>{
    console.log(`request made ${req.method}`)
    next()
}

app.use(express.json())
app.use(logger)
// app.use(core)
app.use(routeHandler);




main().then(() =>{

    app.listen(8080,() => {
        console.log('local host is listing at http://localhost:8080')
    })

})
