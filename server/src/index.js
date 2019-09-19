import express from 'express';
import config from '../config';

const app = express();

require('./startup/db')();
require('./startup/routes')(app);

const port = config.address.port || 3000;

const server = app.listen(port, () => {
    console.log(`port: ${port}`);
});

module.exports = server;
