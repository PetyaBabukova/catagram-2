const express = require ('express');

const checkCatIdMiddleware = require('./middlewares/middleware');

//make an instanse of a server
const app = express();

const cats = [];

// app.get('/', (req, res)=>{
//     res.send("Hello World from express!")
// });

app.get('/download', (req, res)=>{ //directly download to the user`s computer
    // res.download('./views/home.html'); // there is a simillar method "attach - see in documentation"
    
    res.sendFile(__dirname + '/views/home.html');
    //res.sendFile('/views/home.html', {root: __dirname}); //this is an alternative to this above. The file could be with different extentions("pdf"... etc.)
});

// app.get('/cats', (req, res)=>{ //instade of '*' can be anything. That are "wild cards". It`s very similar to RedEx. RexEx could be used in here too. 
//     // res.send([
//     //     'Navcho', 'Gari', 'Mishi'
//     // ]);

//     //res.redirect('/')
// });

app.post("/cats", (req,res)=>{
console.log('create cat');
res.status(201); //set the status code to be 201
res.send('cat created'); //'"send()" includes end(), "status()" doesn`t
// all commands could be chained: res.status(201).send('cat created'); more info - "routh paths"
});

app.get('/cats/:catId?', checkCatIdMiddleware, (req, res)=>{
    // if (!/\d+/.test(req.params.catId)) { // Validation - this could be in the url directly - '/cats/:catId(\\d+)'
    //     res.status(404).send('You need secify cat Id number');
    //     return; // if we miss this return, it goes ahead and returns an error. The other way is with "else".
    // }
    res.send(`You are looking at profile of ${req.params.catId}`);
});

// app.all('/', (req, res)=>{
//     console.log('all requests');
//     res.end();
// })

app.listen(5000, ()=> console.log("Server is listening on port 5000"));