var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var routeSchema = new Schema({
      route: String,
      places: Array
  }, {collection: "jeepneyPass"})

  module.exports = mongoose.model('Jeep', routeSchema);