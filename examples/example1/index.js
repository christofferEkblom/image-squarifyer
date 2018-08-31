/*
 * Copyright 2018 Christoffer Ekblom
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the ISC license.
 * For more info, see https://github.com/christofferEkblom/squarifier/blob/master/LICENSE
 */

'use strict';

let squarifier = require('../../src');

squarifier('../images', 1200, 0x000000FF)
  .catch(err => {
    console.log(err);
  }).then((counter) => {
    console.log(`Done. Changed ${counter} files.`);
  });
