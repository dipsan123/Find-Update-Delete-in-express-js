
// Creating the schema 

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:String, 
    address:String, 
    Father_Name:String, 
    Mother_Name:String,
    email:String

}); 


// exporting the schema 

module.exports = mongoose.model('Student', schema);