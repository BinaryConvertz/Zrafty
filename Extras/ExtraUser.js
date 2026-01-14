"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upper = exports.endline = exports.Title = void 0;
var User = /** @class */ (function () {
    //   private title: string | undefined;
    function User(name) {
        this.name = name;
    }
    User.prototype.logName = function () {
        return "Hello " + this.name;
    };
    return User;
}());
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title(title) {
        var _this = _super.call(this, title) || this;
        // this.name = name;
        _this.title = title;
        return _this;
    }
    Title.prototype.GetTitle = function () {
        return "Welcome to: " + this.title;
    };
    return Title;
}(User));
exports.Title = Title;
var endline = function () {
    return "\n";
};
exports.endline = endline;
var Upper = function (message) {
    return message.toUpperCase();
};
exports.Upper = Upper;
exports.default = User;
