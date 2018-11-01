var express = require('express');
var app = express();
var server = app.listen(4000, function(){
    console.log("running on port 4000");
});
var socketIo = require('socket.io')(server);
var axios = require('axios');

var getApiAndEmit = "TODO";

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);


