var storehippo = require('storehippo-nodejs-sdk')({
    storename : "atishaydemo2",
    access_key : "admin"
});

var assert = require('assert');

describe('StoreHippo', function() {

    this.timeout(1000000);

    before(function (done) {

        done();
    });

    beforeEach(function (done) {
        //An action to be performed before each test case
        done();
    });

    describe("#First", function () {

        it('Adding a Brand and listing them', function (done) {
            var request = {
                entity: 'ms.orders'
            };
            storehippo.list(request, function (err, result) {
                assert.equal(200, result.status, 'Adding an empty Brand does not give prorper error');
                done();
            });

            describe("#Second", function () {

                it('Adding a Brand', function (done) {
                    var request = {
                        entity: 'ms.orders'
                    };
                    storehippo.list(request, function (err, result) {
                        assert.equal(200, result.status, 'Adding an empty Brand does not give prorper error');
                        //assert.equal(result.data, 'name is required.', 'Adding an empty Brand does not give prorper error');
                        done();
                    });


                });

                it('should return -1 when the value is not present', function (done) {
                    var request = {
                        entity: 'ms.orders'
                    };
                    storehippo.list(request, function (err, result) {
                        assert.equal(200, result.status, 'Adding an empty Brand does not give prorper error');
                        //assert.equal(result.data, 'name is required.', 'Adding an empty Brand does not give prorper error');
                        done();
                    });
                });
            });
        });
    });
});