"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sub(...numbers) {
    return numbers.reduce((previousValue, currentValue) => {
        return previousValue - currentValue;
    });
}
exports.default = sub;
