

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
  var queryQ = req.body.searchQ;
  collection.find({ author: queryQ }).toArray(function(err, items) {

		
		items.forEach(function(items){

			collection.find({book: items.book}).toArray(function(err, itemsChild){
			res.render('showAuthor' , {
			title: 'The authors along with their co-authors you queried for',
			itemsChild: itemsChild,
			queried: queryQ
									  });
		});

		});

		
		});
		

		
		
	});

    
};

	


