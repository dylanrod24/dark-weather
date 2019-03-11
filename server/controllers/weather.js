module.exports = {
    location: function (req, res, errors) {
        console.log("made it to controller");
        var lat = req.body.lat;
        var lng = req.body.lng;
        console.log(lat, lng);
        if (errors) {
            console.log(errors);
        }
    },
}