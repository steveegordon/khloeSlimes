var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/slimes', function(req, res, next) {
  res.render('slimes', { title: 'Slimes' });
});

router.get('/guides', function(req, res, next) {
  res.render('guides', { title: 'Guides'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
