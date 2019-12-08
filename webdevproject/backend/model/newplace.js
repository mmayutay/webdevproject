var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var placeSchem = new Schema({
      location: String,
      routes: String
  }, {collection: "places"})

  module.exports = mongoose.model('Place', placeSchem);