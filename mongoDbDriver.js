
// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;

// const uri = 'mongodb://localhost:27017';

// const client = new MongoClient(uri);


// client.connect();


const { MongoClient } = require('mongodb');

async function main() {
    // we'll add code here soon
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    await client.connect();
};