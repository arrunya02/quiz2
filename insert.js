var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
    { fname: 'John', address: 'Highway 71', role: 'admin'},
    { fname: 'Peter', address: 'Lowstreet 4',role: 'admin'},
    { fname: 'Amy', address: 'Apple st 652',role: 'admin'},
    { fname: 'Hannah', address: 'Mountain 21',role: 'admin'},
    { fname: 'Michael', address: 'Valley 345',role: 'admin'},
    { fname: 'Sandy', address: 'Ocean blvd 2',role: 'admin'},
    { fname: 'Betty', address: 'Green Grass 1',role: 'user'},
    { fname: 'Richard', address: 'Sky st 331',role: 'user'},
    { fname: 'Susan', address: 'One way 98',role: 'user'},
    { fname: 'Vicky', address: 'Yellow Garden 2',role: 'user'},
    { fname: 'Ben', address: 'Park Lane 38',role: 'user'},
    { fname: 'William', address: 'Central st 954',role: 'user'},
    { fname: 'Chuck', address: 'Main Road 989',role: 'user'},
    { fname: 'Viola', address: 'Sideway 1633',role: 'user'}
  ];
  db.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});