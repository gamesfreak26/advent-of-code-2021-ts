"use strict";
exports.__esModule = true;
exports.findLargerMesurements = void 0;
var findLargerMesurements = function (numArr) {
    var firstNum = numArr[0];
    var largerThan = 0;
    if (numArr[1] > firstNum) {
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
