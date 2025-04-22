class ColorPicker {
    constructor(r,g,b) {
        this.r=r;
        this.g=g;
        this.b=b;
    }

    getColor() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    setColor(r,g,b) {
        this.r=r;
        this.g=g;
        this.b=b;
    }

    toHex() {
        const toHex=(c)=>c.toString(16).padStart(2, "0");
        return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
    }
}

const color=new ColorPicker(255, 0, 0);
console.log(color.getColor());
console.log(color.toHex());
color.setColor(0, 255, 0);
console.log(color.getColor());
console.log(color.toHex());