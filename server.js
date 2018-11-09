// Server
const express = require('express');
const app = express();
const axios = require('axios');


var getApiAndEmit = "TODO";

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);
// Creating the server and socket with app
var server = app.listen(4000, function(){
    console.log('on port 4000');
});

// Loading socket.io
var io = require('socket.io')(server);

let interval;
// Getting data from Dark Sky
var getApiAndEmit = async socket => {
    try {
        const response = await axios.get(
            "https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/34.052235,-118.243683"
        );
        // Emitting data. It will be taken by the client.
        socket.emit('temp', response.data.currently.temperature);
        socket.emit('windspeed', response.data.currently.windSpeed);
        socket.emit('humidity', response.data.currently.humidity);
    }
    catch (error) {
        console.log(`Error: ${error.code}`);
    }
};

io.on('connection', socket => {
    console.log("New client connected");
        if(interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 120000);
        socket.on('disconnect', () => {
            console.log("Client disconnected");
        });
});


