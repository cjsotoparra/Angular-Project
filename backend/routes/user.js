const express = require("express");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", (req, res, next) => {
	bcrypt.hash(req.body.password, 10).then(hash => {
    	const user = new User({
      		email: req.body.email,
      		password: hash,
		username: req.body.username,
		birthdate: req.body.birthdate
    	});
    	user.save().then(result => {
			res.status(201).json({
          			message: "User created!",
          			result: result
        		});
      		}).catch(err => {
			res.status(500).json({
          			error: err
        		});
      		});
  	});
});

module.exports = router;
