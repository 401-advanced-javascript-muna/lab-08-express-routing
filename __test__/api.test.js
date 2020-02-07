'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Categories API', () => {
  it('post a new categories item', () => {
    return mockRequest.post('/api/v1/categories')
      .then(data => {
        expect(data.status).toBe(200);
        });
      });
  });
  

 
});