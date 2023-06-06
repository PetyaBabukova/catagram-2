const fs = require('fs');
const catsData = require('./cats.json');
const cats = catsData.slice();

function add(name) {
    cats.push(name); 
    fs.writeFile('./cats.json',JSON.stringify(cats), ()=>{
        if(err){
            console.log('some error');
        }

        console.log('successful write');
    });
};

function getAll() {
    return cats.slice();
};

module.exports = {
    add,
    getAll
};