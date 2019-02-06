var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Main page');
});

app.get('/portfolio', function (req, res) {
    res.send('portfolio')
});
app.get('/blog', function (req, res) {
    res.send('blog')
});
app.get('/brif', function (req, res) {
    res.send('brif')
});
app.get('/team', function (req, res) {
    res.send('team')
});
app.get('/contacts', function (req, res) {
    res.send('contacts')
});
app.all('*', function (req, res) {
    res.send('404 error', 404);
});

app.listen(3000, function () {
    console.log('listen 3000!');
});