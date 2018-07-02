const express = require('express');
const hbs = require('hbs');
const path = require('path');

const app = express();

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('makeUpperCase', text => text.toUpperCase());

app.get('/', (request, response) =>
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website!',
    }),
);

app.get('/about', (request, response) =>
    response.render('about.hbs', {
        pageTitle: 'About Page',
    }),
);

app.get('/bad', (request, response) => response.send({ errorMessage: 'Bad request' }));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
