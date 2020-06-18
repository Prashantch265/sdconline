const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load input validation
const validateLoginInput = require('../../validation/login');

//load user model
const Students = require('../../models/stdinfo');

//@route POST api/user/login
//@desc Login user and return JWT token
//@access Public
router.post('/login',(req,res) =>{
    //Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    //Check validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    const name = req.body.name;
    const email = req.body.email;
    const std_id = req.body.std_id;

    //Find User by name
    Students.findOne({name}).then(user => {
        //Check if user exits
        if(!user){
            return res.status(400).json({namenotfound: "name not found"});
        }
        //Check email
        Students.findOne({email}).then(user =>{
            if(!user){
                return res.status(400).json({emailnotfound: "email not found"});
            }
        });
        //Check id
        Students.findOne({std_id}).then(user => {
            if(!user){
                return res.status(400).json({std_idnotfound: "incorrect std_id"});
            }
             // Create JWT Payload
            const payload = {
                std_id: user.std_id,
                name: user.name
            };

            //Sign token
            jwt.sign(
                payload,keys.secretOrKey,{
                    expiresIn: 15778463 //6 months in sec
                },
                (err,token) =>{
                    res.json({
                        success: true,
                        token: "Bearer" + token
                    });
                }
            );
        });
    });
});

module.exports = router;