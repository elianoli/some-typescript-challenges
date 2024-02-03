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
// Simple shape
var Shape = /** @class */ (function () {
    function Shape(base) {
        this.base = base;
    }
    Shape.prototype.calculateArea = function () {
        return this.base.height * this.base.width;
    };
    return Shape;
}());
// Rectangle extends Shape
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(base) {
        return _super.call(this, { width: base.width, height: base.height }) || this;
    }
    return Rectangle;
}(Shape));
// Square extends Shape as well
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side) {
        return _super.call(this, { width: side, height: side }) || this;
    }
    return Square;
}(Shape));
// Instancing the Shapes childs
var rectangle = new Rectangle({ width: 15, height: 10 });
var square = new Square(77);
// Print on console
console.log("Rectangle Area: ".concat(rectangle.calculateArea()));
console.log("Square Area: ".concat(square.calculateArea()));
