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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())

let array = [
  {"location" :'Apas', "routes": ['17C','17B', '17D']},
  {"location" :'Bacayan', "routes": ['62C', '62B']},
  {"location" :'Banilad', "routes": ['13C', '62C', '13B', '62B']},
  {"location" :'Talamban', "routes": ['13C', '62C', '13B', '62B']}]

//Makita nimo sa ubos ang sample nga api, if naa kay mga question, don't hesitate to approach me, para ma explain
//pa nako kung unsa jud atoang buhaton!!, Thank You and more power...
var locationHandler = ""
var tempLook = ""
var destinationHandler = ""


MongoClient.connect(url, function(err, client){
  assert.equal(null, err);
  console.log("connected to db");

  const db = client.db(dbName);
  db.collection('places').find({"location": "Apas"}).toArray(function(err, result){
    if(err) throw err;
    tempLook = result;
    console.log('working');
    
  }) 

  client.close();
})


app.post('/api/greeting', (req, res) => {
  locationHandler = req.body.located;
  console.log(tempLook);
  res.send(tempLook);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);