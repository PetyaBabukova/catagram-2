const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';

const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    family: 4,
});

const database = client.db('catagram');
const cats = database.collection('cats');

// // get a single cat
// client.connect()
// .then((res)=>{
//     if (res.err) {
//     console.log(res.err);
//     return;
//     }

//     const query = { name: 'Garry' };
//     const cat = cats.findOne(query).then((cat)=>{
//     console.log(cat);

//       });
//   });


// // get one cat 2 way - returnes promise(we can use this in other file too)
// client.connect()
// .then((res)=>{
//     if (res.err) {
//     console.log(res.err);
//     return;
//     }

//     const query = { name: 'Garry' };
//     return cats.findOne(query)
    
//   })
//   .then((cat)=>{
//     console.log(cat);
//       });

// // get one cat - 3 way with async function
// async function run() {
//     await client.connect();

//     let firstCat = await cats.findOne({});
//     console.log(firstCat);
// }
// run();

// // get all cats
// client.connect()
//     .then((res) => {
//         if (res.err) {
//             console.log(res.err);
//             return;
//         }

//         cats.find({}).toArray().then((err, cats) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log(cats);
//         })

//     });


