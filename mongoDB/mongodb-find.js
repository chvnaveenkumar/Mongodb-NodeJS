//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, client) => {
    if (err) {
        return console.log('Unable to Conncet to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    const db = client.db('TodoApp');

    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // It shows only Todos with completed is true.
    db.collection('Todos').find({ completed: true }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // It shows only Todos with _id value. No output because we need an object id.
    db.collection('Todos').find({ _id: '5b3a8448ebdfc22a308325c8' }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // It shows only Todos with _id value. No output because we need an object id.
    db.collection('Todos').find({ 
        _id: new ObjectID('5b3a892288f7e328e8787d26') 
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //count number of records
    db.collection('Todos').find().count().then((count) => {
        console.log(`Total count: ${count}`);;
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    client.close();
});
