const chai = require('chai');
const app = require('../../app');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe('Attribute Get All Route', () => {
    it('Should GET all attributes', (done) => {
        chai.request(app)
            .get('/attributes')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("attribute_id");
                    body.should.have.property("name");
                    done();
                }
            })
    });
});
describe('Get One attribute', () => {
    it('Should Get One attribute by ID', (done) => {
        chai.request(app)
            .get('/attributes/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200);
                    body.should.have.property("name");
                    body.should.have.property("attribute_id");
                    done();
                }
            })
    })
    it('Should give 404 if no attribute is found in DB',(done)=>{
        chai.request(app)
        .get('/attributes/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("ATT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        });
    });
});
describe('Get values of an attribute',() =>{
    it('Should Get value of a attribute by ID', (done) => {
        chai.request(app)
            .get('/attributes/values/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("attribute_value_id");
                    body.should.have.property("value");
                    done();
                }
            })
    })
    it('Should give 404 if no value is associated with attribute',(done)=>{
        chai.request(app)
        .get('/attributes/values/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("ATT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/attributes/values/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("ATT_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});
describe('Get attributes of a product',() =>{
    it('Should Get attributes of a product by ID', (done) => {
        chai.request(app)
            .get('/attributes/inProduct/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200);
                    body.should.have.property("attribute_name");
                    body.should.have.property("attribute_value_id");
                    body.should.have.property("attribute_value");
                    done();
                }
            })
    })
    it('Should give 404 if no attribute is associated with product',(done)=>{
        chai.request(app)
        .get('/attributes/inProduct/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("ATT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/attributes/inProduct/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("ATT_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});
