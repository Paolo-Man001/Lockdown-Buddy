const express = require('express'); // make sure we're using express!
const app = express(); // make our 'app' an express one. 
const port = process.env.PORT || 3000 // Port that the server will run on. Will use a default available one, otherwise 3000.

app.get('/', (req, res) => res.send(`Hello World! This is for SOT`))
app.get('/ping', (req, res) => res.send('pong'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))