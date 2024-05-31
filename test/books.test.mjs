import { expect, use } from 'chai';
import request from 'supertest';
import app from '../server.js';

import chaiThings from 'chai-things';
use(chaiThings);

describe('GET api/books/check-books', () => {
  it('should return an array of books with the correct properties', async () => {
    const response = await request(app).get(`/api/books/check-books`);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body.data).to.be.an('array');
    expect(response.body.data).to.satisfy((data) => {
      return data.every((item) => {
        return (
          item &&
          typeof item.book_id === 'number' &&
          typeof item.code === 'string' &&
          typeof item.title === 'string' &&
          typeof item.author === 'string' &&
          typeof item.stock === 'number'
        );
      });
    });
    expect(response.body).to.have.property('totalRows').that.is.a('number');

  });

});