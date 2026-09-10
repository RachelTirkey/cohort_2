const { Admin } = require("../db");


function adminMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    Admin.findOne({ 
        username: username,
        password: password

    }).then(function(value) {
        if(value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin does not exist"
            })
        }
    })
}

module.exports = adminMiddleware;