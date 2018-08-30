/*
 * Copyright 2018 Christoffer Ekblom
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the ISC license.
 * For more info, see https://github.com/christofferEkblom/squarifier/blob/master/LICENSE
 */

'use strict';

let jimp = require('jimp');
let fs = require('fs');
let isInteger = require('./assets').isInteger;
let settings = require('./settings');

module.exports = (directory, size, bgColor) => {
  return new Promise((resolve, reject) => {
    let files;

    if (!validCanvasSize(size)) {
      return reject(new Error(`image size must be a in the interval 1-${settings.CANVAS_SIZE_LIMIT}`));
    }

    if (!validColor(bgColor)) {
      return reject(new Error('invalid background color value'));
    }

    if (!directory) {
      return reject(new Error('directory path must be defined'));
    }

    try {
      files = fs.readdirSync(directory);
    } catch (err) {
      return reject(new Error(`${directory}: no such file or directory`));
    }

    (async () => {
      let counter = 0;

      for (let file of files) {
        let targetFile = `${directory}/${file}`;

        await jimp.read(targetFile).then(img => {
          let width = img.bitmap.width;
          let height = img.bitmap.height;
          let highest = Math.max(width, height);

          if (width !== height || highest > size) {
            img.contain(highest, highest)
              .background(bgColor);

            if (highest > size) {
              img.resize(size, size)
            }

            img.write(targetFile);
            counter++;
          }
        }).catch(() => { });
      }

      return resolve(counter);
    })();
  });
}

function validCanvasSize(size) {
  return isInteger(size) && size > 0 && size <= settings.CANVAS_SIZE_LIMIT;
}

function validColor(color) {
  return isInteger(color) && color > 0 && color <= 0xFFFFFFFF;
}
