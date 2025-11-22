/**
 * Write your code below!
 */

class Product {
  constructor(name, price, inStock, quantity) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
    this.quantity = quantity;
  }

  isInStock() {
    return this.inStock ? "Product available" : "Out of stock";
  }

  order(quantity) {
    if (quantity > this.quantity) {
      return false;
    }

    const total = quantity * this.price;

    this.quantity -= quantity;

    if (this.quantity === 0) {
      this.inStock = false;
    }

    return total;
  }
}

class Shoes extends Product {
  constructor(name, price, inStock, quantity) {
    super(name, price, inStock, quantity);

    this.colors = [];
    this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  }

  addColor(color) {
    this.colors = [...this.colors, color];
  }

  removeSize(size) {
    this.sizes = this.sizes.filter((s) => s !== size);
  }
}

const adidas = new Shoes("Adidas", 299.99, true, 40);

console.log(adidas.isInStock()); // Product available
console.log(adidas.order(30)); // 8999.7
console.log(adidas.order(30)); // false
console.log(adidas.order(10)); // 2999.9
console.log(adidas.isInStock()); // Out of stock

adidas.addColor("red");
adidas.addColor("blue");
adidas.addColor("green");
console.log(adidas.colors); // ["red", "blue", "green"]

adidas.removeSize(38);
adidas.removeSize(40);
adidas.removeSize(43);
console.log(adidas.sizes); // [35, 36, 37, 39, 41, 42, 44]
