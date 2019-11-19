const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require("cors");

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
var destinationHandler = ""

app.post('/api/greeting', (req, res) => {
  destinationHandler = req.body.destined
  array.forEach(element => {
    if(element.location == req.body.located){
      locationHandler = element.location + " and the routes are " + element.routes;
    }if(element.location == req.body.destined){
      destinationHandler = element.location + " and the routes are " + element.routes;
    }
  });
  res.send(locationHandler)
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);