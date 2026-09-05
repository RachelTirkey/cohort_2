const express = require("express");

const app = express();

app.use(express.static("."));

app.get("/sum", function(req, res) {

    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const sum = a + b;

    res.send(sum.toString());
});

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});