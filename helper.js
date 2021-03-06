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

// Settings
module.exports.RANDOM_PREFIX = './random/r';
module.exports.SEQUENTIAL_PREFIX = './sequential/s';
module.exports.FILE_PREFIX = module.exports.RANDOM_PREFIX;
module.exports.ITERATIONS = 1000;
module.exports.THRESHOLD = 100;

// Generate a random array
module.exports.getRandomizedArray = function (range) {
    // Default value for number of iterations
    var _range = range || module.exports.ITERATIONS;

    var list = [];
    for (var i = 0; i < _range; ++i) {
        list.push(i);
    }
    list.shuffle();

    return list;
};
