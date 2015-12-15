var express = require('express');
var router = express.Router();
var app = express();

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/

//var hoge = function(_router){
  router.route('/aaa')
    .all(function(req,res,next){
      next();
    })
    .get(function(req,res,next){
      res.json({"ok":12345});
      res.status(200).end();
    });

  router.route('/bbb')
    .all(function(req,res,next){
      next();
    })
    .get(function(req,res,next){
      res.json({"ok":12345});
      res.status(200).end();
    });
//}
app.use('/v1', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
