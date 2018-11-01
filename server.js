var express = require('express');
var app = express();
var io = require('forecast.io.live')(Server, '9f5c21e8b5dbe91f6f570d294de8a42b', [60000] )

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);

Server.listen(4000, function(){
    console.log("running on port 4000");
})
