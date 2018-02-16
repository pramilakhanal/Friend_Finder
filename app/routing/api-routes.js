var friends = require("../data/friends.js");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});



	app.post("/api/friends", function(req, res) {

		var bestMate = {
			name: "",
			photo: "",
			Difference: 1000
		};

		//console.log(req.body);

// take the result of user's survey POST and parse it.
	var userData = req.body;
	var userScores = userData.scores;

	//console.log(userScores);

	var totalDifference = 0;

	// loop through all the friend in the database.

	for (var i = 0; i < friends.length; i++) {
		//console.log(friends[i]);
		totalDifference = 0;
	
	// loop through all the scores of each friend
	for (var j = 0; j < friends[i].scores[j]; j++) {
		totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));


		// If the sum of the difference is less then the differences of the current bestMate
		if (totalDifference <= bestMate.Difference) {

			// Reset the bestMate to be the new friend.
			bestMate.name = friends[i].name;
			bestMate.photo = friends[i].photo;
			bestMate.Difference = totalDifference;
		}
	}

}
		friends.push(userData);

		res.json(bestMate);

	});


};