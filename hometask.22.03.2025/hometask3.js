class Circle {
    constructor(radius) {
        this.radius=radius;
    }
    getArea() {
        return Math.PI*this.radius**2;
    }
    getPerimeter() {
        return 2*Math.PI*this.radius;
    }
    setRadius(newRadius) {
        this.radius=newRadius;
    }
}

let circle= new Circle(5);
console.log(circle.getArea());
console.log(circle.getPerimeter());
circle.setRadius(10);
console.log(circle.getArea());
console.log(circle.getPerimeter());