/*!
 * Copyright 51 Degrees Mobile Experts Limited. This product is the subject of 
 * Patent Application Nos. GB1905888.2 and EP19192975.1.
 */

'use strict';

// Wait for a message from the main thread with the number iterations
// for the tests. Executes the tests and then posts back the average time
// each iteration took.
// @param time to perform in the benchmark test.
this.onmessage = function (iterations) {

    // Executes the function a number of times recording the duration of each
    // iteration.
    // @param func the function to execute
    // @param iterations of the function
    // @return array of samples
    function benchmark(func, iterations) {
        var results = [];
        for (var i = 0; i < iterations; i++) {
            var start = Date.now();
            func();
            results.push(Date.now() - start);
        }
        return results;
    }

    // Performs a TAK benchmark.
    // @param iterations of the benchmark function to perform
    // @return the shortest amount of time the benchmark function took
    function takBenchmark(iterations) {
        return benchmark(
            function () {
                function tak(x, y, z) {
                    return (x <= y) ? y : tak(tak(x - 1, y, z), tak(y - 1, z, x), tak(z - 1, x, y));
                }
                tak(17, 11, 6);
            }, iterations);
    }

    postMessage(takBenchmark(iterations.data));
}