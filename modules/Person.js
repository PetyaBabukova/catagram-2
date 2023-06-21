const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

personSchema.methods.getInfo = function () {
    console.log(`Hello my name is ${this.name} and I am ${this.age} old!`);
};

// VIRTUAL properties - they dont save in the DB. They can be exposed - additional commands ({getters: true,} or something...)
personSchema.virtual('birthYear') 
.get(function () {
    // get current year - age
    return 2023 - this.age;
})
// .set()

//validate - see in the presentation

module.exports = mongoose.model('Person', personSchema);