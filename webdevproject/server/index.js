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

//Makita nimo sa ubos ang sample nga api, if naa kay mga question, don't hesitate to approach me, para ma explain
//pa nako kung unsa jud atoang buhaton!!, Thank You and more power...
var userLocation = [];
var userDestination = [];
var List = []
  // Database connect
  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
    assert.equal(null, err);
    db = client.db(dbName);

  })

app.post('/api/greeting', (req, res) => {
    db.collection('places').find({"location": req.body.located}).toArray((err, result) => {
      if (err) throw err;   
      result[0].routes.forEach(element => {
        db.collection('jeepneyPass').find({"jeepneyRoute": element}).toArray((error, passes) => {
          if(error) throw error;
          userLocation.push(passes[0].passes)
        })
      });
    })
    db.collection('places').find({"location": req.body.destined}).toArray((err, result) => {
      if (err) throw err;
      result[0].routes.forEach(element => {
        db.collection('jeepneyPass').find({"jeepneyRoute": element}).toArray((error, passes) => {
          if(error) throw error;
          userDestination.push(passes[0].passes)
        })
      });   
    })
    userLocation.forEach(loc => {
      userDestination.forEach(des => {
        loc.forEach(pass => {
          des.forEach(ses => {
            if(pass == ses){
              List.push(pass)
            }
          });
        });
      });
    });
    res.send(List);
    data = []
});

app.listen(3001, () =>
  console.log('Express server is running on localhost: 3001')
);