import { expect, use } from 'chai';
import request from 'supertest';
import app from '../server.js';

import chaiThings from 'chai-things';
use(chaiThings);

describe('GET api/members/check-members', () => {
  it('should return an array of members with the correct properties', async () => {
    const response = await request(app).get(`/api/members/check-members`);

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body.data).to.be.an('array');
    expect(response.body.data).to.satisfy((data) => {
      return data.every((item) => {
        return (
          item &&
          typeof item.member_id === 'number' &&
          typeof item.code === 'string' &&
          typeof item.name === 'string' &&
          (item.penalized_until === null || typeof item.penalized_until === 'string') &&
          typeof item.book_borrowed === 'string'
        );
      });
    });
    expect(response.body).to.have.property('totalRows').that.is.a('number');

  });

});