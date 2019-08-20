var http = require('http');

var express = require('express'); //this means require express

var app = express();//create a express app
// ***************************config***********

// enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

// read req body as obj
var bparser = require('body-parser');


app.use(bparser.json());



//to serve HTML
var ejs = require('ejs');
app.set('views', __dirname + '/views'); //where the html files are
app.engine('html', ejs.renderFile);
app.set('view engine', ejs);

//mongo &bmongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

//db connection
var db = mongoose.connection;
//db object constructor
var ItemDB;

//******************** */storage options*************************
var items = [];
var nextId = 0;

//web server functionality

//to server HTML,CSS,JS, pdf etc from server
app.use(express.static(__dirname + '/views'));

app.get('/',  (req, res) => {
    res.render('index.html');
});

app.get('/admin', (req,res) => {
    res.render('admin.html');
});

app.get('/contact',  (req, res) => {
    res.send('this is contact page');
});

app.get('/about', (req, res) =>{
    res.render('about.html');
    res.send('<h1>My name is Adam Laston and this is the about section<h1>');
});

app.get('/homework', (req,res) => {
    res.render('homework.html');
    //array of object of person/ name gender and array of friends

    // 1 print name of all females
    //print name of all males

    //2 print the friend name of the females
    
})
//endpoint for REST(representational state transfer) functionality



app.get('/api/products',(req, res) => {
    
    ItemDB.find({}, function(error, data){
        if(error){
            console.log('error reading data', error);
            res.status(500);
            res.send(error);
        }
        res.json(data);
    });
});

app.get('/api/products/:user', (req,res)=>{
    ItemDB.find({user: req.params.user}, function(error, data){
        if(error){
            console.log('error reading data', error);
            res.status(500);
            res.send(error);
        }
        res.json(data);
    });
})

app.post('/api/products', (req, res) => {
   //get and assign an id
    var item = new ItemDB(req.body);


    item.save( function(error, savedItem){
        if(error){
            console.log('error was not saved on Mongo', error)
            res.status(500);
            res.send(error);
        }
        console.log('Item saved!!!!!!');
         //send back as an json
        res.status = 201;
        res.json(savedItem);
    });
 
});

// app.get('/homework', (req, res) => {
    
//     /** 1 find the most common used number in a given array */
//     // giv sum of all numbers in array, give multiplication
//     var numbers = [12, 23, 98, 23, 12, 89, 0, 43, 0, 12, 77, 89, 34, 0, 1, 23, 32, 0, 89];
    

// res.send(`the counted: ${counted} \n the numbers: ${numPlace}`);
//     //  Math.max()

   
    

//     /** 2 find the vowels in an give text  */
//     var text = "This is just Another Exercise For You TO PRacTiCe codING soluti0Ns to probl3ms";

// });

//listen to DB connection events
db.on('error', function(error){
    console.log('error connect', error);
});

db.on('open', function() {
    console.log('yaaaay DB is alive');
    /*
    the allowed schemstypes are:
    string, number, date, buffer, boolean, mixed, objectId, array
    */

    // specify the basic structure that each object will have on DB
    var itemSchema = mongoose.Schema({
        tutle: String,
        description: String,
        price: Number,
        image: String,
        category: String,
        user: String
    });

    ItemDB = mongoose.model('itemsCh4', itemSchema);

});



app.listen(8080, () =>{
    console.log('server is listening at http://localhost:8080')
});



// var server = http.createServer((req, res) => {
//     console.log('hello i am the server within the lambda');
//     res.end("this message comes from the server");
// });

// server.listen('8080', () => {
//     console.log('server is listening at http://localhost:8080');
// });

//stop server press ctrl+c (control+cancel)

//npm install will install all the dependencies. never send the dependicies(code files and pack JSON)

//port numbers: always go 1000 or up for port number because lower may be used by the pc etc.
