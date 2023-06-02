const mongoose = require('mongoose')
const connectToDatabase = require('../config/dbConnection')


connectToDatabase()



const fileSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
  });
  
  const File = mongoose.model('File', fileSchema);


  module.exports = File
  