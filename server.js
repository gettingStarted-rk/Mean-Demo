
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    moongose = require('mongoose');
    meetupsController = require('./server/controller/meetups-controller');

moongose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));

//REST API 
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.listen(3000, function () {
    console.log('Server listening on port 3000 . . . ');
});
