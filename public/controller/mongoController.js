(function () {

	var mongoController = (function () {

	//Retrieve
	var MongoClient = require('mongodb').MongoClient;
	var queryTable;

	function queryTable(){

	//Connecting to the db:
	MongoClient.connect('mongodb://localhost:27017/mydb', function(err, db) {
	if(!err) {
	console.log("We are connected");
	}
	
	var collection = db.collection('user');
	//var docs = [{sex:"male"}];
	//collection.remove();
	
	//collection.insert(docs, {w:1}, function(err, result) {
	//collection.remove({},function(err, result){});
	collection.find().each(function(err, doc) {
	console.dir(doc);
	});
	});
	}
	return queryTable;
	})();

	module.exports = mongoController;

})();
	
