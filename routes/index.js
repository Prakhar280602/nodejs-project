var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Signin' });
});

/* GET register page. */
router.post('/register', function(req, res, next) {
  console.log(req.body);
  res.render('register', { title: 'Register' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET create page. */
router.post('/create', function(req, res, next) {
  console.log(req.body);
  res.send('welcome to signin');
});

module.exports = router;
