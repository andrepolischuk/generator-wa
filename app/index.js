'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    this.name = this.appname.replace(/\s/g, '-');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('index.html', 'index.html');
    this.copy('src/index.css', 'src/index.css');
    this.copy('src/index.js', 'src/index.js');
    this.template('_package.json', 'package.json');
  },

  install: function() {
    this.installDependencies({bower: false});
  }
});
