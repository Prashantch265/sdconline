const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model

const Stdinfo = new Schema({
    name:{ 
        type: String,
        required: true
    },
    std_id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = Students = mongoose.model('students',Stdinfo);