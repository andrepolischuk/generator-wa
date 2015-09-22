import {Base} from 'yeoman-generator';

export default class WebApp extends Base {
  init() {
    this.name = this.appname.replace(/\s/g, '-');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('index.html', 'index.html');
    this.copy('src/index.css', 'src/index.css');
    this.copy('src/index.js', 'src/index.js');
    this.template('_package.json', 'package.json');
  }

  install() {
    this.installDependencies({bower: false});
  }
};
