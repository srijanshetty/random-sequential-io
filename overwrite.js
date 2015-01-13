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

// Configuration parameters
const FILE_PREFIX = './random/r';
const ITERATIONS = 1000;

// The fs module which is required to read files
var fs = require('fs');
var microtime = require('microtime');

// Add a shuffle method to array
Array.prototype.shuffle = function (){
    var i = this.length, j, temp;
    if ( i === 0 ) {
        return;
    }

    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

// The access pattern of files
var fileList = [];
for (var index = 0; index < ITERATIONS; ++index) {
    fileList.push(index);
}
fileList.shuffle();

// Start recording
fileList.forEach(function(value) {
    // Read the file buffer
    var buffer = fs.readFileSync(FILE_PREFIX + value);
    var fileLength = buffer.length;

    // The access pattern of bytes
    var list = [];
    for (var i = 0; i < fileLength; ++i) {
        list.push(i);
    }
    list.shuffle();

    // Overwrite the bytes
    for (i = 0; i < fileLength/2; ++i) {
        buffer[i] = ~buffer[i];
    }

    var t1 = microtime.now();
    fs.writeFileSync(FILE_PREFIX + value, buffer);
    var t2 = microtime.now();

    // Print the time
    console.log(t2 - t1);
});