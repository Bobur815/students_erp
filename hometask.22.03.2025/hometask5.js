class Rectangle {
    constructor(width, height) {
        this.width=width;
        this.height=height;
    }
    getArea() {
        return this.width*this.height;
    }
    getPerimeter() {
        return 2*(this.eni+this.boyi);
    }
    isSquare() {
        return this.width===this.height;
    }
}

const rect=new Rectangle(4, 5);
console.log(rect.getArea());
console.log(rect.getPerimeter());
console.log(rect.isSquare());