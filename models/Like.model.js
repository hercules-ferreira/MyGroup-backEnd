const { Schema, model } = require('mongoose');


const likeSchema = new Schema({
  title: String,
  description: String,
  rating: Number,
  idCreator: String
}, 

{ timestamps: true })

module.exports = model('Like', likeSchema);