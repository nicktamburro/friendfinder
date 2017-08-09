var data = require('../data/friends.js');


module.exports = function (app) {

	app.get('/api/friends', function(req, res){
		res.json(data.friends.name);
		console.log("Name: " + data.friends.name);
	})


	app.post('/api/friends', function(req, res){
		var newFriend = req.body;

		var comparison = [];

		for(var i = 0; i < data.length; i++) {

			var possibleMatch = data[i];
			var difference = 0;
			
			for(var j = 0; j < possibleMatch.scores.length; j++) {
				var scoreCombined = Math.abs(possibleMatch.scores[j] - newFriend.scores[j]);
				difference += scoreCombined;
			}

			comparison[i] = difference;
		}

		var bestMatchScore = comparison[0];
		var bestMatchIndex = 0;

		for(var i = 1; i < comparison.length; i++) {
			if(comparison[i] < bestMatchScore) {
				bestMatchScore = comparison[i];
				bestMatchIndex = i;
			}
		}

		data.push(newFriend);

		res.json(data[bestMatchIndex]);
	})
}

console.log("working");