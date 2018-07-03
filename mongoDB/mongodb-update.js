const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Conncet to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b3a9a14a0452aaadcb10aa8')
    },{
        $set: {
            age: 29
        }
    },{
        new: true
    }).then((result) => {
        console.log(result);
    });

});
