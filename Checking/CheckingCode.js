"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equal = void 0;
var Equal;
(function (Equal) {
    Equal.notEqual = function (a, b) {
        if (a !== b) {
            return a;
        }
        return b;
    };
    Equal.isEqual = function (a, b) {
        if (a === b) {
            return a;
        }
        return b;
    };
})(Equal || (exports.Equal = Equal = {}));
