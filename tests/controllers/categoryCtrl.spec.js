const chai = require('chai');
const app = require('../../app');
const chaiHttp = require('chai-http');
const assert = require('assert');
const expect = chai.expect;
const should = chai.should();
chai.use(chaiHttp);

describe('Categories Get All Route', () => {
    it('Should GET all categories', (done) => {
        var query = {
            page:1,
            limit:2
        }
        chai.request(app)
            .get('/categories')
            .query(query)
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body;
                    assert(res.status, 200)
                    body.should.have.property("Count");
                    body.should.have.property("rows");
                    body.rows[0].should.have.property("category_id");
                    body.rows[0].should.have.property("name");
                    body.rows[0].should.have.property("description");
                    body.rows[0].should.have.property("department_id");
                    done();
                }
            })
    });
});
describe('Get One category', () => {
    it('Should Get One Category by ID', (done) => {
        chai.request(app)
            .get('/categories/1')
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
    it('Should give 404 if no category is found in DB',(done)=>{
        chai.request(app)
        .get('/categories/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("CAT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        });
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/categories/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("CAT_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});
describe('Get category of a product',() =>{
    it('Should Get Category of a product by ID', (done) => {
        chai.request(app)
            .get('/categories/inProduct/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("category_id");
                    body.should.have.property("name");
                    body.should.have.property("department_id");
                    done();
                }
            })
    })
    it('Should give 404 if no category is associated with product',(done)=>{
        chai.request(app)
        .get('/categories/inProduct/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("CAT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/categories/inProduct/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("CAT_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});
describe('Get categories of a department',() =>{
    it('Should Get Categories of a department by ID', (done) => {
        chai.request(app)
            .get('/categories/inDepartment/1')
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    done()
                }
                else {
                    var body = res.body[0];
                    assert(res.status, 200)
                    body.should.have.property("category_id");
                    body.should.have.property("name");
                    done();
                }
            })
    })
    it('Should give 404 if no category is associated with department',(done)=>{
        chai.request(app)
        .get('/categories/inDepartment/922')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 404)
                body.should.have.property("code").equals("CAT_01");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
    it('Should give 500 if parameter is not integer',(done)=>{
        chai.request(app)
        .get('/categories/inDepartment/asd')
        .end((err, res) => {
            if (err) {
                console.log(err)
                done()
            }
            else {
                var body = res.body;
                assert(res.status, 500)
                body.should.have.property("code").equals("CAT_00");
                body.should.have.property("message");
                body.should.have.property("field");
                done();
            }
        })
    });
});
