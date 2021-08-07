const request = require('supertest')('https://jsonplaceholder.typicode.com');
const assert = require('chai').assert;

describe('Testing of web services', () => {

  it('should check whether response is 200', () => {
    return request.get('/users').expect(200);
    });
  
  it('should verify response header', () => {
    return request.get('/users')
    .expect('Content-Type', 'application/json; charset=utf-8');
    });

    it('should verify response body',() => {
      return request.get('/users').then(function (response) {
        const arrList = response.body;
        assert.isArray(arrList);
        assert.isTrue(arrList.length === 10);
        });
      });
  }); 
