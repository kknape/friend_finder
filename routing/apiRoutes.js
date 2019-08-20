//Friend Finder App - api routes javascript file
//Contains two routes
//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// ===============================================================================
// LOAD DATA
// We are linking our routes to a the friends.js "data" source.
// This data source holds arrays of information on friends that have submitted the survey.
// ===============================================================================

var friendData = require("../app/data/friends.js");


module.exports = function(app) {
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------


   // API GET Requests
  // A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
        app.get("/api/friends", function(req, res) {
          console.log("HEllo2");
            res.json(friendData);

        });

  // A POST route will add newFriend to the Friends array 
      //  app.post("/api/friends", newFriend)
      app.post("/api/friends", function (req, res) { 
            friendData.push(req.body);
            res.json(true);    
            console.log(friendData);  
            });
        };
      //  console.log(friendData);
      
