const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

//apply body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport config
require('./config/passport');

//use api routes
app.use('/api/users',users);

//creating port
const port = process.env.PORT || 5000;

//creating server
app.listen(port,() => console.log(`listening to ${port}`));
