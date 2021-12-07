"use strict";
exports.__esModule = true;
exports.findLargerMesurements = exports.findLargerMesurementsForStrings = void 0;
var findLargerMesurementsForStrings = function (stringArr) {
    var numArr = [];
    for (var i = 0; i < stringArr.length; i++) {
        var parsedNum = parseInt(stringArr[i]);
        numArr.push(parsedNum);
    }
    var largerMeasurements = (0, exports.findLargerMesurements)(numArr);
    return largerMeasurements;
};
exports.findLargerMesurementsForStrings = findLargerMesurementsForStrings;
var findLargerMesurements = function (numArr) {
    var largerThan = 0;
    if (numArr[1] > numArr[0]) {
        largerThan = largerThan + 1;
    }
    for (var i = 2; i < numArr.length; i++) {
        if (i >= numArr.length) {
            break;
        }
        else {
            if (numArr[i] > numArr[i - 1]) {
                largerThan = largerThan + 1;
            }
        }
    }
    return largerThan;
};
exports.findLargerMesurements = findLargerMesurements;
