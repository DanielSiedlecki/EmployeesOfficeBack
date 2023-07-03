const express = require('express');
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser');
const { initSocketIO } = require('./socket');
const cors = require('cors');
const http = require('http');

const server = http.createServer(app);

app.use(cors({
    origin: ['http://localhost:8080']
}));

initSocketIO(server);

app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

app.use(routes);

server.listen(PORT);
console.log("Serwer nasłuchuje na porcie", PORT);