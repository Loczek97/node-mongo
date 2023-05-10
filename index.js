const express = require('express');
const add = require('./add');
const app = express();
const ip = '127.0.0.1';
const port = 27520;

const obj = {
    name: 'Jan',
    surname: 'Kowalski',
    age: 32
};


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api', (req, res) => {
    console.log('ktos wszedł na /api');
    res.json(obj);
});

app.get('/hello', (req, res) => {
    res.json(obj);
});

app.listen(port, ip, () => {
    console.log(`Example app listening on port ${port}!`)
});
