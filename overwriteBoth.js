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

// The fs module which is required to read files
var fs = require('fs');
var microtime = require('microtime');

// Configuration parameters
var helper = require('./helper');
const THRESHOLD = helper.THRESHOLD;
const RANDOM_PREFIX = helper.RANDOM_PREFIX;
const SEQUENTIAL_PREFIX = helper.SEQUENTIAL_PREFIX;

// Generate a randomly sorted array
var fileList = helper.getRandomizedArray();

// Start recording
fileList.forEach(function(value, index) {
    // The FILE_PREFIX depends on the THRESHOLD
    var FILE_PREFIX;
    if (index < THRESHOLD) {
        FILE_PREFIX = RANDOM_PREFIX;
    } else {
        FILE_PREFIX = SEQUENTIAL_PREFIX;
    }

    // Read the file buffer
    var buffer = fs.readFileSync(FILE_PREFIX + value);
    var fileLength = buffer.length;

    // The access pattern of bytes
    var list = helper.getRandomizedArray(fileLength);

    // Overwrite the bytes
    for (var i = 0; i < fileLength/2; ++i) {
        buffer[list[i]] = ~buffer[];
    }

    // Time the write operation
    var t1 = microtime.now();
    fs.writeFileSync(FILE_PREFIX + value, buffer);
    var t2 = microtime.now();

    // Print the time
    console.log(t2 - t1);
});