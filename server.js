var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);

app.listen(4000, function(){
    console.log("running on port 4000");
})
