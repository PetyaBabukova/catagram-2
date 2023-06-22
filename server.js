const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const createCat = require('./services/createCat');
require('./config/db');

const checkCatIdMiddleware = require('./middlewares/middleware');
const loggerMiddleware = require('./middlewares/logger.js');
const cats = require('./cats');
const Cat = require('./modules/Cat')

//make an instanse of a server
const app = express();

// const cats = [];

app.use('/static', express.static('public')); //Here we need  to put /static/cats.html in the Url path, if the needed file is cats.html. 
// If we need index.html - dont need to specify file name - it do it automaticaly

// app.use(express.static('public')); // This is more complecated - use with attention on routing (2h 20 min, lecture 5)
app.use(loggerMiddleware);

app.use(bodyParser.urlencoded({ extended: false }))

app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
 
//     let name = "Pesho";
//     res.render('homeHandlebars', { name });
// })

// app.get('/', (req, res) => {
//     createCat("Poly", "Petya")
//     let name = "Pesho";
//     res.render('homeHandlebars', { name });
// })

app.get('/', (req, res) => {

Cat.find({name:"Poly"}).populate('owner').then(cat => {
    console.log(cat)
    let name = "Pesho";
    res.render('homeHandlebars', { name });
})

});

app.get('/cats', (req, res) => {
    res.render('cats', { cats: cats.getAll() });
})

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/home.html');
// });

// //Wild cards / RegEx
// app.get('/*/cats', (req, res)=>{ 
// res.send('some cute cats');
// });

// app.get('/s?cats', (req, res)=>{ 
//     res.send('some cute cats');
//     });

// app.get(/.*cats$/, (req, res)=>{ //Regex - we use reex sintaxis (not ';, - /expression/)
//         res.send('some cute cats');
//         });


// Middleware
// app.get('/cats/:catId?', checkCatIdMiddleware, (req, res)=>{

//     res.send(`You are looking at profile of ${req.params.catId}`);
// });

//Validate params in the Url:
// app.get('/cats/:catId', (req, res)=>{
//     if (!/\d+/.test(req.params.catId)) { // Validation - this could be in the url directly - '/cats/:catId(\\d+)'
//         res.status(404).send('You need secify cat Id number');
//         return; // if we miss this return, it goes ahead and returns an error. The other way is with "else".
//     }
//     res.send(`You are looking at profile of ${req.params.catId}`);
// });

//Another way to validate params in the Url:
// app.get('/cats/:catId(\\d+)', (req, res) => {
//     res.send(`You are looking at profile of ${req.params.catId}`);
// });

// //Responce - JSON
// app.get('/cats', (req, res) => {
//     res.json([
//         'Navcho',
//         'Gary',
//         'Pesho']);
// });

// // Redirect
// app.get('/cats', (req, res)=>{
//     res.redirect('/')
// })

//The methods can be chained (the example is copy/pasted from presentation. I havent test it):
// app.route('/home')
//   .get((req, res) => {
//     res.send('GET home page') })
//   .post((req, res) => {
//     res.send('POST home page') })
//   .all((req, res) => {
//     res.send('Everything else')
//   })



// app.get('/download', (req, res) => { //directly download to the user`s computer
//     res.download('./views/home.html'); // there is a simillar method "attach - see in documentation"
// });

//Send File
app.get('/download', (req, res) => { //directly download to the user`s computer
    res.sendFile(__dirname + '/views/some.html');
    //res.sendFile('/views/home.html', {root: __dirname}); //this is an alternative to this above. The file could be with different extentions("pdf"... etc.)
});

app.post("/cats", (req, res) => {
    let catName = req.body.cat;
    cats.add(catName);

    res.redirect('/cats');
    // res.status(201); //set the status code to be 201
    // res.send('cat created'); //'"send()" includes end(), "status()" doesn`t
    // all commands could be chained: res.status(201).send('cat created'); more info - "routh paths"
});

//app.all('/', (req, res)=>{  
// console.log('handle all requests);
// res.end();
// })

//

app.listen(5000, () => console.log("Server is listening on port 5000"));