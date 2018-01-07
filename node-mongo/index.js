const MongoClient  = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';
MongoClient.connect(url,(err, db) => {
	assert.equal(err,null);
	console.log('Connected correctly to server');
	const collection = db.collection("dishes");
	//Inserting document into collection
	collection.insertOne({"name" : "abcd", "description" : "test"},
		(err,result) => {
			assert.equal(err,null);
			console.log("After Insert:\n");
			console.log(result.ops);

		//Search for everything there in the collection
			collection.find({}).toArray((err,docs) => {
				assert.equal(err,null);
				console.log("Found: \n");
				console.log(docs);
			//dropping collection
				db.dropCollection("dishes", (err,result) => {
					assert.equal(err,null);
					db.close();
				})
			})
		})
});