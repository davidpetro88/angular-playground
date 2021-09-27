const fs = require('fs-extra');
const concat = require('concat');


build = async () =>{
  const files = [
    './dist/angular-web-component/runtime.js',
    './dist/angular-web-component/polyfills.js',
    './dist/angular-web-component/main.js'
  ];

  const cssFiles = [
    './dist/angular-web-component/styles.css',
  ];

  await fs.ensureDir('demo');
  await concat(files, 'demo/dogs.js');
  await concat(cssFiles, 'demo/dogs.css');
}

build();
