var assert = require('assert');
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return 1 when the value is present', function(){
      assert.equal(1, [1, 2, 3, 4, 5, 6].indexOf(2));
    });
  });
});
