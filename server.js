const express = require('express');

const app = express();

app.get('/', (request, response) =>
    response.send({
        name: 'Matt',
        likes: ['Biking', 'Music'],
    }),
);

app.get('/about', (request, response) => response.send('About Page'));

app.get('/bad', (request, response) => response.send({ errorMessage: 'Bad request' }));

app.listen(3000);
