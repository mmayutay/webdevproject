const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//Connection to URL
const url = 'mongodb://localhost:27017';

//DB name
const dbName = "webdev_project";

const app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())
//aklsdjjfasdcvoaskdfkasdf;asd;fasdfasdf
//fasdokjflkasdmflasdfasdfasdfasdfsdafas
var userLocation = [];
var userDestination = [];
var List = []
// Database connect
MongoClient.connect(url, {
  useUnifiedTopology: true
}, function (err, client) {
  assert.equal(null, err);
  db = client.db(dbName);

})

// Sending the requested values
var locationRoutes =  []
var destinationRoutes = []
app.post('/api/greeting', (req, res) => {
  if(req.body.located === req.body.destined){
    res.send("Since your location is the same, just ride any jeep that passes on your location so that you will still reach your destination!")
  }else{
  db.collection('places').find({
    "location": req.body.located
  }).toArray((err, result) => {
    if (err) throw err;
    result[0].routes.forEach(element => {
      locationRoutes.push(element)
      db.collection('jeepneyPass').find({
        "jeepneyRoute": element
      }).toArray((error, passes) => {
        if (error) throw error;
        if (passes.length != 0) {
          userLocation.push(passes[0].passes)
        }
      })
    });
  })
  db.collection('places').find({
    "location": req.body.destined
  }).toArray((err, result) => {
    if (err) throw err;
    result[0].routes.forEach(element => {
      destinationRoutes.push(element)
      db.collection('jeepneyPass').find({
        "jeepneyRoute": element
      }).toArray((error, passes) => {
        if (error) throw error;
        if (passes.length != 0) {
          userDestination.push(passes[0].passes)
        }
      })
    });
  })
  userLocation.forEach(loc => {
    userDestination.forEach(des => {
      loc.forEach(pass => {
        des.forEach(ses => {
          if (pass == ses) {
            if (!List.includes(pass)) {
              List.push(pass)
            }
          }
        })
      })
    })
  })
  res.send({"destinationRoutes":destinationRoutes, "value":List, "locationRoutes": locationRoutes});
  List.length = 0
  destinationRoutes.length = 0
  locationRoutes.length = 0
  }
});

// show all the routes from the database
app.get('/api/requestroute', (req, res) => {
  db.collection('places').find({}, {"location": 1, "_id": 0}).toArray((err, result)   => {
    res.send(result)
  })
})  

app.listen(3001, () =>
  console.log('Express server is running on localhost: 3001')
);