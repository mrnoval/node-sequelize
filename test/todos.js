const app = require("./../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

describe("Todos", () => {
    describe("/GET all todos", () => {
        it("it should Get all todos", (done) => {
            chai.request(app)
            .get("/api/all")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("array");
                done();
            })
        });
    });
    describe("/POST todo", () => {
        it("it should POST a todos", (done) => {
            const stub = {
                text: "going to do something"
            };

            chai.request(app)
            .post("/api/new")
            .send(stub)
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a("object");
                res.body.should.have.property("text");
                done();
            })
        });
    });
});