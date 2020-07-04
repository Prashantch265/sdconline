const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model

const StdSchema = new Schema({
    std_id:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{ 
        type: String,
        required: true
    }
})

module.exports = Students = mongoose.model('students',StdSchema);