const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 3000;

//parsing moddleware

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//static files
app.use(express.static('public'));

app.engine('hbs',exphbs({extname: '.hbs'}));
app.set('view engine','hbs');

app.get('',(req,res) => {
    res.render('index');
});


app.listen(port,() => console.log(`listening on port ${port}`));
