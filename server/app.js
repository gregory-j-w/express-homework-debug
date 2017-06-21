var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');
var hbs = require('handlebars');

  app.use(express.static(path.join(__dirname, 'views')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'hbs');

  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey I the server finally works')
  })

//json
  app.get('/home_alone', function (req, res) {
    var json = {title: "Home Alone", year: 1991}
    res.send(json);
  })

//json
  app.get('/weather', function (req, res) {
    var json = {temp: 72, weather: "partly coudy"}
    res.send(json);
  })

//handlebars
  app.get('/friends', function(request, response) {
    response.render('friends');
  })

//handlebars
app.get('/profile', function(request, response) {
  response.render('profile');
  })

//message
app.get('/message', function(request, response){
  response.send('This is the required message')
  })

// first argument is the port number
server.listen(5000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
