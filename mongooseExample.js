
const Person = require('./modules/Person')
const uri = 'mongodb://localhost:27017/mongotest';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, family: 4, });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to database!");
});

let person = new Person({ name: "Petya", age: 33 });


// // old way with callback, it doesn`t work anymore
// person.save((err, result)=>{
//     if (err) {
//         return console.log(err);
//     }

//     console.log(result);
// });


// // new way - async function
// async function save(){
//     let result = await person.save();
//     if (result.err) {
//         return console.log(err)
//     }
//     console.log((result));
// };
// save();

// // second way - promise
// person.save().then((res)=>{
//    console.log(res);
// });

// // how to use virtual properties
// Person.find({})
// .then((people)=>{
// people.forEach(x => console.log(`I am born ${x.birthYear}`));
// })

// // Find by ID
// Person.findById('6491b7f3d47ff95ac4abfca1') // returnes OBJECT 
// .then(res => console.log(res))

// Person.find({_id: '6491b7f3d47ff95ac4abfca1'}) // returnes ARRAY
// .then(res => console.log(res))

// //Update
// Person.updateOne({_id: '6491b7f3d47ff95ac4abfca1'}, {$set: { name: "Peteto" }})
// .then(res => console.log(res))

// //Find and Update
// Person.updateOne({_id: '6491b7f3d47ff95ac4abfca1'}, {$set: { name: "Peteto" }})
// .then(res => console.log(res))

// //Count
// async function run() {
//     let count = await Person.count();

//     console.log(count);
// }
// run();

// //Count with filter
// async function run() {
//     let count = await Person.count({age: {$gte: 25}}); //$gte = greater than

//     console.log(count);
// }
// run();


// //Select and Sort
// async function run() {
//     // let names = await Person.find().select('name') //mongoose way

//     let names = await Person.find({}, { _id: 0, name: 1 }) // native mongo way, how to skip the id
//     let sortedNames = await Person.find({}, { _id: 0, name: 1 }).sort({age: -1}) // Sort
//     console.log(names);
//     console.log(sortedNames);
// }
// run();

//Limit & Skip
async function run() {
    // let names = await Person.find().select('name') //mongoose way
    let names = await Person.find({}, { _id: 0, name: 1 }).sort({age: -1}).skip(2).limit(10) // Sort
    console.log(names);
}
run();


// More queries in the presentation

// Mongoose queries -> https://www.mongoosejs.com/docs/queries.html