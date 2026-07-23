const express = require('express');

const app = express();

app.use(express.static('public'));

// Setting EJS
app.set('view engine', 'ejs');

// Homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Bouquets Page
app.get('/bouquets', (req, res) => {
    res.render('bouquets');
});

// Hampers Page
app.get('/hampers', (req, res) => {
    res.render('hampers');
});

// Gift Combos Page
app.get('/giftcombos', (req, res) => {
    res.render('giftcombos');
});
app.get('/invitations', (req, res) => {
    res.render('invitations');
});
app.get('/giftcombos', (req, res) => {
    res.render('giftcombos');
});
app.get('/customize', (req, res) => {
    res.render('customize');
});
app.get('/customize', (req, res) => {
    res.render('customize');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
// Run Server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});