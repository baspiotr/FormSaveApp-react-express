import request from 'supertest';
import { GuestForm } from '../../src/models/guestForm';

let server;

describe('/api/v1/guest-forms', () => {
    beforeAll(async () => {
        server = require('../../src/index');
    });

    afterEach(async () => {
        await server.close();
    });

    describe('POST /', () => {
        it('should create new guestForm', async () => {
            const correctBody = {
                firstName: 'TestFirstName',
                lastName: 'TestLastName',
                email: 'test@test.com',
                eventDate: '2019-09-18',
            };

            const res = await request(server)
                .post('/api/v1/guest-forms')
                .send(correctBody);

            expect(res.status).toBe(201);
            expect(res.body.success).toBe(true);

            const createdOne = await GuestForm.findOne(correctBody);

            expect(createdOne.firstName).toEqual(correctBody.firstName);
            expect(createdOne.lastName).toEqual(correctBody.lastName);
            expect(createdOne.email).toEqual(correctBody.email);
            expect(createdOne.eventDate.toISOString().split('T')[0]).toEqual(correctBody.eventDate);

            await createdOne.remove();
        });

        it('should deny new guestForm because of wrong date param', async () => {
            const wrongDateBody = {
                firstName: 'TestFirstName',
                lastName: 'TestLastName',
                email: 'test@test.com',
                eventDate: '2019-09-4418',
            };

            const res = await request(server)
                .post('/api/v1/guest-forms')
                .send(wrongDateBody);

            expect(res.status).toBe(400);
            expect(res.body.success).toBe(false);
        });
    });
});
