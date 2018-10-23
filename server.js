var express = require('express');
var app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);

app.listen(4000, function(){
    console.log("running on port 4000");
})
