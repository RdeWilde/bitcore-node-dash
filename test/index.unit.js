'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export ioncore-lib', function() {
    var ioncore = require('../');
    should.exist(ioncore.lib);
    should.exist(ioncore.lib.Transaction);
    should.exist(ioncore.lib.Block);
  });
});
