var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    products: [
      { title: 'Test 1'},
      { title: 'Test 2'},
      { title: 'Test 3'}
    ]
  });
});

module.exports = router;
