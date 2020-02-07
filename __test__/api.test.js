'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('Categories API', () => {
  it('post a new food item', () => {
    let testObj = { name: 'name1', description: 'description1' };
    return mockRequest.post('/api/v1/categories')
      .send(testObj)
      .then(data => {
        let record = data.body;
        Object.keys(testObj).forEach(key => {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });

 
});