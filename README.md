# generator-wa [![Build Status][travis-image]][travis-url]

> Yeoman generator for web application

Includes [postcss][postcss], [browserify][browserify] and [babel][babelify] for ES2015 syntax support

```sh
yo wa
   create package.json
   create .editorconfig
   create .gitignore
   create index.css
   create index.html
   create index.js
```

## Install

```sh
npm install --global generator-wa
```

## Usage

```sh
mkdir awesome-app
cd awesome-app
yo wa
git init
git commit -am "Initial commit"
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/generator-wa
[travis-image]: https://travis-ci.org/andrepolischuk/generator-wa.svg?branch=master

[browserify]: https://github.com/substack/node-browserify
[babelify]: https://github.com/babel/babelify
[postcss]: https://github.com/postcss/postcss
