var path = require('path');

module.exports = function(app){
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
