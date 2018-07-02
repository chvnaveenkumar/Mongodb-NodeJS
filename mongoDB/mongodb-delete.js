const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Conncet to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');
//delete Many records
db.collection('Users').deleteMany({name: 'Naveen'}).then((result) => {
console.log(result);
});
//delet one record
db.collection('Users').deleteOne({name: 'Naveen'}).then((result) => {
    console.log(result);
    });

    db.collection('Users').findOneAndDelete({name: 'Naveen'}).then((result) => {
        console.log(result);
    });
    client.close();
});
