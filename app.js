const express = require('express');
const layout = require('express-ejs-layouts');
const app = express();

app.set('view engine', 'ejs');
app.use(layout);
app.use(express.static('src'));

app.get('/', (req, res) => {
    res.render('nime', {
        title: 'Home',
        layout: 'layout/layouts'
    });
});

app.get('/cari', (req, res) => {
    res.render('cari', {
        title: 'Cari',
        layout: 'layout/layouts'
    })
});

app.get('/pustaka', (req, res) => {
    res.render('pustaka', {
        title: 'pustaka',
        layout: 'layout/layouts'
    })
});

app.get('/trending', (req, res) => {
    res.render('trending', {
        title: 'Trending',
        layout: 'layout/layouts'
    })
});

app.get('/bookmart', (req, res) => {
    res.render('bookmart', {
        title: 'Bookmart',
        layout: 'layout/layouts'
    })
});

app.get('/acount', (req, res) => {
    res.render('acount', {
        title: 'Acount',
        layout: 'layout/layouts'
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});