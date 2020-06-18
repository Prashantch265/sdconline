const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Students = mongoose.model('students');
const keys = require('../config/keys');

const opts = {};
opts.jwtFormRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts,(jwt_payload, done) => {
        Students.findById(jwt_payload.id)
        .then(user => {
            if(user){
                return done(null, user);
            }
            return done(null, false);
        })
        .catch(err => console.log(err));
    }));
};