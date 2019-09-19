import express from 'express';
import cors from 'cors';
import config from '../config';

const app = express();
app.use(cors());

require('./startup/db')();
require('./startup/routes')(app);

const port = config.address.port || 3000;

const server = app.listen(port, () => {
    console.log(`port: ${port}`);
});

module.exports = server;
