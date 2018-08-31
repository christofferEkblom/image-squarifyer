/*
 * Copyright 2018 Christoffer Ekblom
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the ISC license.
 * For more info, see https://github.com/christofferEkblom/squarifier/blob/master/LICENSE
 */

'use strict';

let squarifier = require('../../src');

(async () => {
  try {
    let numberOfChanges = await squarifier('../images', 1200, 0x000000FF);
    console.log(`Done. Changed ${numberOfChanges} files.`);
  } catch (err) {
    console.log(err);
  }
})();
