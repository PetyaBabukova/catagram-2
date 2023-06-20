const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/mongotest';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, family: 4,});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{
    console.log("Connected to database!");
});

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Person = mongoose.model('Person', personSchema);

let person = new Person({name: "Petya", age: 33});


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

// second way - promise
person.save().then((res)=>{
   console.log(res);
});