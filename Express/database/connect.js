
const mongoose = require('mongoose');
const connect = async ()=>{
    await mongoose.connect(process.env.URL); 
    console.log('Successfully connected to Mongoose');
}

// exporting the mongoose 

module.exports = connect;
