// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express setup
var app = express();
var PORT = process.env.PORT || 3000;

//data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//DATA
var friends = [{
  "name":"Nick",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ]
}];

//routes, later these go into their own files
  //html routes...
        /*app.get("/", function(req, res) {
          res.sendFile(path.join(__dirname, "/app/public/home.html"));
        });

        app.get("/survey", function(req, res) {
          res.sendFile(path.join(__dirname, "/app/public/survey.html"));
        });*/

  //api routes
  /*      app.get("/api/friends", function(req, res){
          res.sendFile(path.join(__dirname, "/app/data/friends.js"));
        });

        app.post("/app/data/friends.js", function(req, res) {
                var newFriend = req.body;
                newFriends.routeName = newFriends.name.replace(/\s+/g, "").toLowerCase();

                console.log(newFriend);

                friends.push(newFriend);

                res.json(newFriend);
              });*/
//routes
var api = require("./app/routing/apiRoutes.js"); 
var html = require("./app/routing/htmlRoutes.js");
var friends = require("./app/data/friends.js");

//listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});