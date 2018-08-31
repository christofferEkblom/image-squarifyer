# squarifier
Transforms images in a directory to perfect squares

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

## Author
* Christoffer Ekblom
