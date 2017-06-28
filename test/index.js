const assert = require('assert');
const webpackDiff = require('../index');

context('webpack-diff', () => {
  describe('fromFiles', () => {
    it('test', done => {
      const files = ['index.js']
      webpackDiff.fromFiles(files).then(stats => {
        assert(stats);
      }).then(done, done);
    });
  });
});
