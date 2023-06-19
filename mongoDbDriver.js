// const { MongoClient } = require('mongodb');

// async function main() {
//     // we'll add code here soon
//     const uri = 'mongodb://localhost:27017';
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
//     await client.connect();
// };









// This is old, it doesn`t work for mongo 6
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {useUnifiedTopology: true,
    family: 4,
  });
  
client.connect((err) => {
            if (err) {
                console.log(err);
                return;
            }
    
            let db = client.db('catagram');
            let cats = db.collection('cats');
    
            cats.findOne({}, (err, result)=>{
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            })
        });


