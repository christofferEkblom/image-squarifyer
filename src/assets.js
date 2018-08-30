/*
 * Copyright 2018 Christoffer Ekblom
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the ISC license.
 * For more info, see https://opensource.org/licenses/ISC
 */

'use strict';

module.exports.isInteger = (value) => {
  return /^\d+$/.test(value);
}
