
'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  initializing: function() {
    this.pkg = require('../package');
    this.name = this.appname;
  },

  app: function() {
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
