"use strict";
exports.__esModule = true;
exports.findLargerMesurements = exports.findLargerMesurementsForStrings = void 0;
var findLargerMesurementsForStrings = function (stringArr) {
    var numArr = stringArr.split("\n").map(function (val) { return parseInt(val); });
    var largerMeasurements = (0, exports.findLargerMesurements)(numArr);
    return largerMeasurements;
};
exports.findLargerMesurementsForStrings = findLargerMesurementsForStrings;
var findLargerMesurements = function (numArr) {
    var largerThan = 0;
    for (var i = 1; i < numArr.length; i++) {
        if (numArr[i] > numArr[i - 1]) {
            largerThan = largerThan + 1;
        }
    }
    return largerThan;
};
exports.findLargerMesurements = findLargerMesurements;
