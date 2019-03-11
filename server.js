// Server
const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const controller = require('./server/controllers/weather.js');


var getApiAndEmit = "TODO";

// app.use(express.json());
app.use(bodyParser.json({extended: true}));
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);
// Creating the server and socket with app
const port = process.env.PORT || 4000;
var server = app.listen(port, () => console.log(`On port ${port}`));

// Loading socket.io
var io = require('socket.io')(server);

// let interval;
// Getting data from Dark Sky
var getApiAndEmit = async socket => {
    try {
        const response = await axios.get(
            // `https://api.darksky.net/forecast/${dsKey}/lat,lng`
        );
        // Emitting data. It will be taken by the client.
        socket.emit('temp', response.data.currently.temperature);
        socket.emit('windspeed', response.data.currently.windSpeed);
        socket.emit('humidity', response.data.currently.humidity);
    } catch (error) {
        console.log(`Error: ${error.code}`);
    }
};
// Socket connect/disconnect and interval
io.on('connection', socket => {
    console.log("New client connected");
    socket.on('disconnect', () => {
        console.log("Client disconnected");
    });
});