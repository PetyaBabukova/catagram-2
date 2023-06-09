const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'Person'
    }
});

module.exports = mongoose.model('Cat', catSchema);