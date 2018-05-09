const express = require('express');

const app = express();

// set view engine
app.set('view engine', 'ejs');


const path = require("path");
app.use(express.static(
  path.join(__dirname, 'public')
));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', require('./resources'));

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
