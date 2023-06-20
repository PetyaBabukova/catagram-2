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
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    family: 4,
});


// Ivcho
// client.connect((err) => {
//             if (err) {
//                 console.log(err);
//                 console.log("Pesho 1");
//                 return;
//             }

//             console.log("Pesho 2");

//             let db = client.db('catagram');
//             let cats = db.collection('cats');

//             cats.findOne({}, (err, result)=>{
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }

//                 console.log(result);
//                 console.log("Pesho 3");

//             })
//             console.log("Pesho 4");

//         });



// // My try
// client.connect().then(() => {
//     let db = client.db('catagram');
//     let cats = db.collection('cats');

//     cats.findOne({}, (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         console.log(result);
//         console.log("Pesho 3");

//     })
//     console.log("Pesho 4");
// })


// // this I get from: https://www.mongodb.com/docs/drivers/node/current/quick-start/connect-to-mongodb/
// async function connect() {
//     try {
//       const database = client.db('catagram');
//       const cats = database.collection('cats');
//       const query = { name: 'Garry' };
//       const cat = await cats.findOne(query);
//       console.log(cat);
//     } 
//     catch {
//         console.log("Petya");
//     }

//     finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
//   connect();
//   // connect().catch(console.dir);


//   async function connect() {
//     try {
//       const database = client.db('catagram');
//       const cats = database.collection('cats');
//     } 
//     catch {
//         console.log("Petya");
//     }

//     finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }

  client.connect().then(()=>{
    const database = client.db('catagram');
    const cats = database.collection('cats');
    const query = { name: 'Garry' };
    const cat = cats.findOne(query).then((cat)=>{
    console.log(cat);

      });
  })

