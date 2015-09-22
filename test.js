import test from 'ava';
import {assert, test as helpers} from 'yeoman-generator';
import {join} from 'path';

test.before(t => {
  helpers.run(join(__dirname, './app'))
    .inDir(join(__dirname, './temp'))
    .withOptions({'skip-install': true})
    .on('end', () => {
      t.end();
    });
});

test('should generate files', t => {
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
