var express = require('express');
var app = express();
var http = require('http');
var axios = require('axios');
// var io = require('socket.io')(server);
// var server = http.Server(app);
// server.listen(4000, () => console.log("running on port 4000"));

var getApiAndEmit = "TODO";

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);
// Creating the server and socket with app
var server = app.listen(4000, function(){
    console.log('on port 4000');
});
var io = require('socket.io')(server);

let interval;
// var getApiAndEmit = async socket => {
//     try {
//         const response = await axios.get(
//             "https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/34.0900,117.8903"
//         ); // Getting data from Dark Sky
//         socket.emit('darksky', response.data.currently.temperature); // Emitting a new message. It will be taken by the client.
//     }
//     catch (error) {
//         console.log(`Error: ${error.code}`);
//     }
// };

io.on('connection', socket => {
    console.log("New client connected");
        if(interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 60000);
        socket.on('disconnect', () => {
            console.log("Client disconnected");
        });
});


