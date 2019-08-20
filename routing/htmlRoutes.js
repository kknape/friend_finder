//Friend Finder App - html routes javascript file
//Contains two routes
//A GET Route to `/survey` which should display the survey page.
//* A default, catch-all route that leads to `home.html` which displays the home page.

//---Dependencies---
var path = require("path");

module.exports = function(app) {

    //home - for any url not already defined, send them to the home page
    app.get('/home', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //survey
    app.get('/survey', function(req, res){
        console.log("Hello")
        res.sendFile(path.join(__dirname, '../public/survey.html'));

    });
}