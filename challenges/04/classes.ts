
// Represents width and heigth properties
interface Base {
    width: number;
    height: number;
}

// Simple shape
class Shape {
    constructor(public base: Base) {}

    calculateArea(): number {
        return this.base.height * this.base.width;
    }
}

// Rectangle extends Shape
class Rectangle extends Shape {
    constructor(base: Base) {
        super({ width: base.width, height: base.height });
    }
}

// Square extends Shape as well
class Square extends Shape {
    constructor(side: number) {
        super({ width: side, height: side });
    }
}

// Instancing the Shapes childs
const rectangle = new Rectangle({ width: 15, height: 10 });
const square = new Square(77);

// Print on console
console.log(`Rectangle Area: ${rectangle.calculateArea()}`);
console.log(`Square Area: ${square.calculateArea()}`);