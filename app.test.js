// const { fib } = require('./app');

const app = require('./app');
const should = require('should');
const request = require('supertest');

describe('GET /test', () => {
  it('return status code is 200', (done) => {
    request(app)
      .get('/test')
      .expect(200)
      .end((err, res) => {
        if(err) throw err;
        console.log(res.body);
        should(res.body).not.be.equal({});
        done();
      })
  });
});


// describe('fibonacci', () => {
  // describe('given number 10', () => {
  //   it('return 55', () => {
  //     should(fib(10)).exactly(55);
  //     '10'.should.be.equal('10');
  //   });
  // });

  // describe('given number 9', () => {
  //   it('return 45', () => {
  //     assert.strictEqual(fib(9), 34);
  //   });
  // });

  // describe('given number 11', () => {
  //   it('return 55', () => {
  //     assert.strictEqual(fib(11), 89);
  //   });
  // });

// });