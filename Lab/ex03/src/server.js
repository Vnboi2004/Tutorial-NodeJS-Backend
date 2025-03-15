const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();



const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on http://${hostname}:${port}/`)
})



