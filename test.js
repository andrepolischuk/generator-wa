'use strict';
var test = require('ava');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var join = require('path').join;

test.before(function (t) {
  helpers.run(join(__dirname, './app'))
    .inDir(join(__dirname, './temp'))
    .withOptions({'skip-install': true})
    .on('end', function () {
      t.end();
    });
});

test('should generate files', function (t) {
  assert.file([
    '.editorconfig',
    '.gitignore',
    'src/index.css',
    'src/index.js',
    'index.html',
    'package.json'
  ]);

  assert.fileContent('package.json', /"name": "temp"/);
  t.end();
});
