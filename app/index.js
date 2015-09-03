'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  init: function() {
    this.name = this.appname.replace(/\s/g, '-');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.template('index.css', 'index.css');
    this.template('index.html', 'index.html');
    this.template('index.js', 'index.js');
    this.template('_package.json', 'package.json');
  },

  install: function() {
    this.installDependencies({bower: false});
  }
});
