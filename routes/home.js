

exports.index = function(req, res) {

res.render('index', {title: 'Author DB'});
}


exports.query = function(req, res) {

	// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/authorData", function(err, db) {
  if(err) { return console.dir(err); }

  var collection = db.collection('User');
 
	collection.find().toArray(function(err, items) {

		res.render('showAuthor' , {
			title: 'The authors along with their co-authors you queried for',
			items: items});
		});
		
	});

    
};

	


