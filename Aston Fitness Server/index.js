var bodyParser = require('body-parser');
var express    = require('express');
var expressJWT = require('express-jwt');
var fs         = require('fs');
var https      = require('https');
var httpStatus = require('http-status');
var jwt        = require('jsonwebtoken');
const users    = require('./users');

const config = {
  secret:'SECRET',
  port:3000
};

var app = express();
app.use(bodyParser.json());

app.post('/auth/login/',function(req,res){
  var user = users.find(u => u.email === req.body.email);
  if(user !== undefined &&
     req.body.password === user.password){
    var uid = user.uid;
    var token = jwt.sign({ uid : uid }, config.secret);
    res.status(httpStatus.OK).json({token:token, uid:uid});
  }
  else res.status(httpStatus.UNAUTHORIZED).send();
});

app.get(
  '/api/v1/users/:uid',
  expressJWT({secret:config.secret}),
  function(req,res){
    var uid = Number(req.params.uid);
    var user = users.find(u => u.uid === uid);
    if(user === undefined || uid !== req.user.uid)
      res.status(httpStatus.UNAUTHORIZED).send();
    else
      res.status(httpStatus.OK).json({data:user.data});
  }
);

app.use(express.static('public'));
app.get('/dashboard/',function(req,res){
  res.sendFile(__dirname + '/public/dashboard.html');
});
app.get('/signup/',function(req,res){
  res.sendFile(__dirname + '/public/signup.html');
});

var credentials = {
  key:fs.readFileSync('ssl/key.pem','utf8'),
  cert:fs.readFileSync('ssl/cert.pem','utf8'),
};
var httpsServer = https.createServer(credentials,app);
httpsServer.listen(config.port,function(){
  console.log('Listening on port ' + config.port);
});
