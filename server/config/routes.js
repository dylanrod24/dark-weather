var weather = require('./../controllers/weather.js');
var path = require('path');

module.exports = function(app){
    app.post('/api/location', weather.location);
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
    });
    
}
