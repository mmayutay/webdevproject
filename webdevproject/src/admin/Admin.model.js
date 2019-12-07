const mongodb = require('mongodb');

var adminSchema = new mongodb({
    jeepney: {
        type: String
    },
    places: {
        type: String
    }
});

mongodb.model('Admin', adminShcema);