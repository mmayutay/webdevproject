var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var routeSchema = new Schema({
      jeepneyRoute: String,
      passes: Array
  }, {collection: "jeepneyPass"})

  module.exports = mongoose.model('Jeep', routeSchema);