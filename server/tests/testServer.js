/**
 * Created by teithun on 28.01.2015.
 */

var request = require('superagent');
var expect = require('expect.js');

describe('Suite one', function(){
    it (function(done){
        request.get('http://localhost:3000').end(function(res){
            expect(res).to.exist;
            expect(res.status).to.equal(200);
            expect(res.body).to.contain('Hello Draw!');
            done();
        });
    });
});

