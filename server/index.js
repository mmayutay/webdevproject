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
// Database connect
MongoClient.connect(url, {
  useUnifiedTopology: true
}, function (err, client) {
  assert.equal(null, err);
  db = client.db(dbName);

})

// Sending the requested values
var reqUserLocation = ""
var reqUserDestination = ""
var locationRoutes = []
var destinationRoutes = []



app.post('/api/greeting', (req, res) => {
  reqUserLocation = req.body.located
  reqUserDestination = req.body.destined
  if (req.body.located === req.body.destined) {
    res.send("Since your location is the same, just ride any jeep that passes on" +
      "your location so that you will still reach your destination!")
  } else {
    db.collection('location').find({
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
    db.collection('location').find({
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
    var List = [""]
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
    if (List == []) {
      res.send({ "location": reqUserLocation, "destination": reqUserDestination, "destinationRoutes": destinationRoutes, "value": List, "locationRoutes": locationRoutes });
    } else {
      res.send({ "location": reqUserLocation, "destination": reqUserDestination, "destinationRoutes": destinationRoutes, "value": List, "locationRoutes": locationRoutes });
      List.length = 0
      destinationRoutes.length = 0
      locationRoutes.length = 0
      userDestination = []
      userLocation = []
    }
  }
});

// show all the routes from the database
app.get('/api/requestroute', (req, res) => {
  db.collection('location').find({}, { "location": 1 }).toArray((err, result) => {
    res.send(result)
  })
})


app.post('/jeepme/login', (req, res) => {
  db.collection('admin').find({username: req.body.username}, (err, data) => {
      console.log(data)
  })
  
})

app.listen(3001, () =>
  console.log('Express server is running on localhost: 3001')
);