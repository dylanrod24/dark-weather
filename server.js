var express = require('express');
var app = express();
var io = require('socket.io')(server);
var axios = require('axios');

var getApiAndEmit = "TODO";

app.use(express.json());
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/routes.js')(app);
var server = app.listen(4000, () => console.log("running on port 4000"));

let interval;
io.on("connection", socket => {
    console.log("New client connected");
        if(interval) {
            clearInterval(interval);
        }
        interval = setInterval(() => getApiAndEmit(socket), 10000);
        socket.on("disconnect", () => {
            console.log("Client disconnected");
        });
});

var getApiAndEmit = async socket => {
    try {
        const response = await axios.get(
            "https://api.darksky.net/forecast/9f5c21e8b5dbe91f6f570d294de8a42b/34.0900,117.8903"
        ); // Getting data from Dark Sky
        socket.emit("From API", response.data.currently.temperature); // Emitting a new message. It will be taken by the client.
    }
    catch (error) {
        console.log(`Error: ${error.code}`);
    }
};
