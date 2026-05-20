class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    if (quantity < 1) throw new Error("Quantity must be at least 1");
    this.items.push({ name, price, quantity });
  }

  total() {
    const subtotal = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return subtotal > 100 ? subtotal * 0.9 : subtotal;
  }
}

module.exports = { Cart };
