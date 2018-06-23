const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) =>
    response.send({
        name: 'Matt',
        likes: ['Biking', 'Music'],
    }),
);

app.get('/about', (request, response) => response.send('About Page'));

app.get('/bad', (request, response) => response.send({ errorMessage: 'Bad request' }));

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});
