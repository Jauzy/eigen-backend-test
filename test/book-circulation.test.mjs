import { expect, use } from 'chai';
import request from 'supertest';
import app from '../server.js';

import chaiThings from 'chai-things';
use(chaiThings);

describe('POST api/book-circulation/borrow-book', () => {
    it('should do member borrow book with correct behavior', async () => {
        const response = await request(app).post(`/api/book-circulation/borrow-book`).send({
            book_code: 'B1',
            member_code: 'M1',
        })

        expect(response.status).to.equal(200);
        expect(response.body).to.satisfy(function (body) {
            return typeof body === 'object' || typeof body === 'string';
        });

    });
});
describe('POST api/book-circulation/return-book', () => {
    it('should do member borrow book with correct behavior', async () => {
        const response = await request(app).post(`/api/book-circulation/return-book`).send({
            book_code: 'B1',
            member_code: 'M1',
        })

        expect(response.status).to.equal(200);
        expect(response.body).to.satisfy(function (body) {
            return typeof body === 'object' || typeof body === 'string';
        });

    });
});