const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(cors())

let array = ['Apas', 'Bacayan', 'Banilad', 'Basak Pardo']

//Makita nimo sa ubos ang sample nga api, if naa kay mga question, don't hesitate to approach me, para ma explain
//pa nako kung unsa jud atoang buhaton!!, Thank You and more power...

app.post('/api/greeting', (req, res) => {
  array.forEach(element => {
    if(element == req.body.located){
      res.send("See you tommorow")
    }
  });
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);