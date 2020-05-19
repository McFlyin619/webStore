var express = require('express');
var app = express(); // create an app

/******************************************************************/ 
// Web Server Endpoints
/******************************************************************/ 

app.get('/', (req, res) => {
    res.send('Hello World'); //Can add index.html files and so on
});

app.get('/about', (req, res) => { 
    res.send('<h1 style="color:grey">OBrien McQuade</h1>');
});

/******************************************************************/ 
// Rest API Endpoints
/******************************************************************/ 

app.post('/api/items', (req, res) => {
    console.log('User wants to save an item');

    res.status(201); // 201 = Created!
    res.send("Cool");
})

//  run the server
// localhost => 127.0.0.1
// CORS => Cross Origin Resource Sharing
app.listen(8080, function(){
    console.log('Server running on http://localhost:8080');
});
