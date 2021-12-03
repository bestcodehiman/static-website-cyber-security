const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.set('views', './templates');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
	/* 
	sameSite: 'strict'
	
	-> This value tells the browser not to send the session cookie when 
	the request comes from a different domain 
	*/
    sameSite: 'strict'
  }
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  /* 
	res.setHeader('X-Frame-Options', 'sameorigin')
	
	-> Asks the browser to block any attempt to load your website within an iframe 
  */
  res.setHeader('X-Frame-Options', 'sameorigin');
  //res.setHeader("Content-Security-Policy", "frame-ancestors 'self';");
  next();
});


app.get('/', function (req, res) {
	res.render('index', {
    isValidSession: req.session.isValid
  });
});

app.post('/personalwebsite', function (req, res) {
	
    res.render('index', {
      purchaseMessage: 'You have clicked Personal website button'
    });
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));

