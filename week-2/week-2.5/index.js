// creating an http server
// express
// node ddefault library => no

// const express = require("express");

// const app = express();

// function sum(n) {
//     let ans = 0;
//     for (let i = 1; i <= n; i++) {
//         ans = ans + i;
// }
//     return ans;
// }

// app.get("/", function (req, res) {
//   const n = req.query.n;
//   const ans = sum(n);

//   res.send("hi your ans is " + ans);
// });

// app.listen(3000);

// -------------*****-------------


const express = require("express");
const app = express();

const users = [{
    name: "Rick",
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function (req, res) {
    //   write logic here
    const rickKidneys = users[0].kidneys;
    const numberOfKidneys = rickKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < rickKidneys.length; i++) {
        if (rickKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })

})

// middlewares

app.use(express.json());

app.post("/", function (req, res) {
    //   write logic here
    
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Kidney inserted"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        
    })
})

app.listen(3000);


