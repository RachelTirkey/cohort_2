// request - response cycle

const express = require ("express");
const app = express();

function ticketChecker(req, res, next) {
    const ticket = req.query.ticket;
    if (ticket == "free") {
        next(); // pass control to the next middleware
    }
    else{
        res.status(403).send("Access denied");
    }
}


app.use(ticketChecker); // only triggers for all the end points below app.use

app.get("/ride1", function(){
    res.send("You rode the first ride!");
})

app.get("/ride2", function(){
    res.send("You rode the first ride!");
})

app.get("/ride3", function(){
    res.send("You rode the first ride!");
})

app.listen(3000);