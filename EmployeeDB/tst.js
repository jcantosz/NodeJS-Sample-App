var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;    
var user = process.env.MONGO_USER;
var password = process.env.MONGO_PASS;
var dbname = process.env.MONGO_DB;
var host = 'localhost';
var port = '27017';

MongoClient.connect('mongodb://' + user + ':' + password + '@' + host + ':' + port + '/' + dbname + "?authMechanism=DEFAULT&authSource=admin", function(err, db){  
  if(err){
    console.log(err);
  }else{
    console.log('Mongo Conn....');
  }
});
