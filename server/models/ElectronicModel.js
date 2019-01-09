const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const electronicSchema = new Schema({
  product:{
    type: String
  },
  
  image:{
    type: String
  },
  price:{
    type: Number
  }

});

module.exports = mongoose.model("Electronic", electronicSchema);
