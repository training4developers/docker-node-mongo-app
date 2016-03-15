var express = require('express');

// Constants
var PORT = 3000;

// App
var app = express();
app.use(express.static(require("path").join(__dirname, "www")));
app.listen(PORT);

console.log('Running on http://localhost:' + PORT);
