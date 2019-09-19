import request from 'supertest';

let server;

const corectBody = {
    firstName: 'TestFirstName',
    lastName: 'TestLastName',
    email: 'test@test.com',
    date: '2019-09-19T13:58:07+0000',
};
