const chai = require('chai');
const app = require('../../app');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe('Departments Get All Route', () => {
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
});
describe('Get One Department', () => {
    it('Should Get One Department by ID', (done) => {
        chai.request(app)
            .get('/departments/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("name");
                    body.should.have.property("description");
                    done();
                }
            })
    })
    it('Should give 404 if no department is found in DB',(done)=>{
        chai.request(app)
        .get('/departments/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("DEP_02");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/departments/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("DEP_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});