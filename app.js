const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This code is pushed to fail!!Cause some error!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
