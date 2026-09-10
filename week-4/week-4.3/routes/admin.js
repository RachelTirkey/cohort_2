const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

router.post('/signup', (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   Admin.create({
       username: username,
       password: password
   })

   res.json({
       msg: "Admin created successfully"
   })
});

router.post('/courses', adminMiddleware, (req, res) => {

});

router.get('/courses', adminMiddleware, (req, res) => {

});

module.exports = router;