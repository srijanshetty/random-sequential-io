/*
 * Copyright (c) 2015 Srijan R Shetty <srijan.shetty+code@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

// Sanity check
if (!process.argv[2]) {
    console.log('Directory not specified');
    process.exit(1);
}

// The fs module which is required to read files
var fs = require('fs');
var microtime = require('microtime');

// Helper functions
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Definations
var fileContent;
var randomFileIndex;
var t1, t2;

// Start recording
t1 = microtime.now();
randomFileIndex = getRandomInt(0, 100);
fileContent = fs.readFileSync(process.argv[2] + randomFileIndex);
t2 = microtime.now();

// Print the time
console.log(t2 - t1);
