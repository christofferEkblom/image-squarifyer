/*
 * Copyright 2018 Christoffer Ekblom
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the ISC license.
 * For more info, see https://github.com/christofferEkblom/squarify-images/blob/master/LICENSE
 */

'use strict';

let sut = require('../src');
let unzipper = require('unzipper');
let fs = require('fs');
let jimp = require('jimp');
let chai = require('chai');
let expect = chai.expect;
let tempDir = `${__dirname}/temp`;
let stream;

describe('image-squarifyer', () => {
  it('should set correct image sizes', () => {
    stream = fs.createReadStream(`${__dirname}/images.zip`)
      .pipe(unzipper.Extract({ path: tempDir }));

    stream.on('readable', () => {
      sut(tempDir, 1000, 0xFFFFFFFF).then(() => {
        assertAndRemove('200x400.jpg', 400);
        assertAndRemove('400x200.jpg', 400);
        assertAndRemove('1000x1400.jpg', 1000);
        assertAndRemove('1400x1000.jpg', 1000);
        assertAndRemove('1400x1400.jpg', 1000);
      });
    });
  });
});

function assertAndRemove(file, expecedSize) {
  let targetFile = `${tempDir}/${file}`;
  jimp.read(targetFile).then(img => {
    expect(img.bitmap.width).to.equal(expecedSize);
    expect(img.bitmap.height).to.equal(expecedSize);
    fs.unlink(targetFile, () => { });
  });
}
