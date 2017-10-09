'use strict';

let utils = require('./utils');

describe('Gets a shortened Google home url from bit.ly', function() {
    it('should return a shortened url object', function (done) {
        bitlyApiRequest
            .get('/v3/shorten')
            .query({
                access_token: 'fd301ad1493fff764cfb441693e39a4441cbc2a4',
                longUrl: 'http://www.google.com'
            })
            .expect(res => {utils.report.showServerResponseBody(res, this);})
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(schemaToBeCorrect)
            .end(done);

        function schemaToBeCorrect(res) {
            // console.log(res);  

            chai.expect(res.body).to.be.an('object');
            chai.expect(res.body).to.have.property('status_code').that.is.a('number');
            chai.expect(res.body).to.have.property('status_txt').that.is.a('string');
            chai.expect(res.body).to.have.property('data').that.is.an('object');
            chai.expect(res.body.data).to.have.property('url').that.is.an('string');
            chai.expect(res.body.data).to.have.property('hash').that.is.an('string');
            chai.expect(res.body.data).to.have.property('global_hash').that.is.an('string');
            chai.expect(res.body.data).to.have.property('long_url').that.is.an('string');
            chai.expect(res.body.data).to.have.property('new_hash').that.is.an('number');
        }
    });
});
