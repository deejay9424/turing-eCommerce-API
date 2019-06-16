const chai = require('chai');
const app = require('../../app');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);
describe('Departments Get Route', () => {
    it('Should GET all departments', (done) => {
        chai.request(app)
            .get('/departments')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("department_id");
                    body.should.have.property("name");
                    body.should.have.property("description");
                    done();
                }
            })
    });
})