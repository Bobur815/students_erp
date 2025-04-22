class OnlineShop {
    constructor() {
        this.products=[];
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(id) {
        this.products=this.products.filter(product=>product.id!==id);
    }
    getProductsByCategory(category) {
        return this.products.filter(product=>product.category===category);
    }
    applyDiscount(category, discountPercent) {
        this.products=this.products.map(product=>{
            if (product.category===category) {
                return { ...product, price: product.price*(1-discountPercent/100)};
            }
            return product;
        });
    }

    calculateTotal() {
        return this.products.reduce((total, product)=>total+product.price, 0);
    }
}

let shop=new OnlineShop();
shop.addProduct({ id: 1, name: "Phone", price: 500, category: "Electronics" });
shop.addProduct({ id: 2, name: "Laptop", price: 1000, category: "Electronics" });
shop.addProduct({ id: 3, name: "Shoes", price: 100, category: "Fashion" });
console.log(shop.calculateTotal());
shop.applyDiscount("Electronics", 10);
console.log(shop.calculateTotal());
console.log(shop.getProductsByCategory("Electronics")); 
shop.removeProduct(1);
console.log(shop.calculateTotal());