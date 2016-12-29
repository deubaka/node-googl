var should = require('should');
var chai = require('chai');
var expect = chai.expect;
var googl = require('../');

describe('node-googl', function () {
    describe('shortener', function () {
        it('should generate a shortened URL for \'http://github.com\'', function (done) {
            googl.shorten('http://github.com', 'AIzaSyDDizVObS-YEoSTIU5u6pFJevGt1lhSOBc', function (err, shortenedUrl) {
                expect(shortenedUrl).to.not.be.null;
                expect(shortenedUrl).to.not.be.undefined;

                done();
            });
        });

        it('should generate an error for an invalid key', function (done) {
            googl.shorten('http://github.com', 'foobar', function (err, shortenedUrl) {
                expect(err).to.not.be.null;
                expect(err).to.not.be.undefined;

                done();
            });
        });
    });


    after(function (done) {
        console.log('Done');
        done();
    });
});
