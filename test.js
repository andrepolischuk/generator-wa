
'use strict';

var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var join = require('path').join;

describe('wa', function() {
  before(function(done) {
    helpers.run(join(__dirname, './app'))
      .inDir(join(__dirname, './temp'))
      .withOptions({'skip-install': true})
      .on('end', done);
  });

  it('should generate files', function() {
    assert.file([
      '.editorconfig',
      '.gitignore',
      'index.css',
      'index.html',
      'index.js',
      'package.json'
    ]);

    assert.fileContent('package.json', /"name": "temp"/);
  });
});
