const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");

const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

const router = require('./router');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(function(req, res, next) {
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
  });
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: uuidv4(), 
    resave: false,
    saveUninitialized: true
}));

app.use('/', router);

// app.get('/', (req, res) =>{
//     res.render('base', { title : "Login System"});
// })


app.listen(port, ()=>{ console.log("Listening to the server on\n http://localhost:5000")}); 