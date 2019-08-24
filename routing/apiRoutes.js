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
            res.json(friendData); 
        });


//compute matching algorithm
//        app.get("/api/friends", (req, res) =>{
//            return res.json(friendData.scores);
//            console.log(friendData); 
//       });

  // A POST route will add newFriend to the Friends array 
      //  app.post("/api/friends", newFriend)
      app.post("/api/friends", function (req, res) { 

        var newF = req.body
        console.log(newF);
         //   friendData.push();
        //    res.json(true);    
        //    console.log(friendData); 
        var compatibleF = {};

        for(var i = 0; i < friendData.length; i++){
         
          var totalDif =0;

          for (var j=0; j<friendData[i].scores.length; j++) {
            var diff = Math.abs(newF.scores[j] - friendData[i].scores[j]);
            totalDif += diff;
          }
          if (i===0) {
            compatibleF={index: i, totalDif: totalDif};
          } else {
            if (totalDif < compatibleF.totalDif) {
              compatibleF={index: i, totalDif: totalDif};
            }
          }         
        }

        var friendsArray = require("../app/data/friends.js");

        var bestieMatch = friendsArray[compatibleF.index]
        console.log(bestieMatch);
      // Add new friend to friends data
     //   friendsArray.push(newF);
     
        //send match results to client (modal)
        res.json(bestieMatch);
        //res.send
            });
        };
      //  console.log(friendData);
