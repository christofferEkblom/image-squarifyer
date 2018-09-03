[![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/christofferEkblom/squarifier/blob/master/LICENSE)
[![npm package](https://img.shields.io/npm/v/squarifier.svg)](https://www.npmjs.com/package/squarifier)
[![npm package](https://img.shields.io/npm/dm/squarifier.svg)](https://www.npmjs.com/package/squarifier)
[![Build Status](https://travis-ci.org/christofferEkblom/squarifier.svg?branch=master)](https://travis-ci.org/christofferEkblom/squarifier)

# squarifier
## Description
Transforms images in a directory to perfect squares.

## Installation
``npm i squarifier``

## Usage
If you want to squarify all of the images in a given directory with a max size of 1200 pixels and fill the margin with a black background color, you can do the following:

### Solution 1: code example
```
let squarifier = require('squarifier');

squarifier('path/to/img/folder', 1200, 0x000000FF)
  .catch(err => {
    console.log(err);
  }).then((counter) => {
    console.log(`Done. Changed ${counter} files.`);
  });
```

### Solution 2: CLI
```
node path/to/squarifier/index.js -d path/to/img/folder -s 1200 -c 0x000000FF
```

For more examples, see [examples](https://github.com/christofferEkblom/squarifier/tree/master/examples).

## CLI options
``-d, --directory [path]``
target directory (required)

``-s --size [integer]``
 output canvas size (default is 1000)

``-c --color [0xrrggbbaa]``
background color (default is 0xffffffff)

``-h, --help ``
output usage information

## Supported image formats
* bmp
* gif
* jpeg
* png
* tiff

Other formats will be ignored.

## Requirements
* Node version 7.6.0 and above

## Author
* Christoffer Ekblom
