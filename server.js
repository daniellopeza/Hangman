var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET words for game. */
router.get('/words', function(req, res, next) {
 	res.locals.connection.query('SELECT * from words', function (error, results, fields) {
		if(error) throw error;
		res.send(JSON.stringify(results));
	});
});


module.exports = router;