// ⚠️  BROKEN VERSION — used in the demo to show a failing PR
// Changes introduced (simulating a careless refactor):
//   - Discount threshold raised from 100 to 200 (spec says 100)
//   - Discount rate changed from 10% to 5% (spec says 10%)

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
    return subtotal > 200 ? subtotal * 0.95 : subtotal; // ← wrong threshold and rate
  }
}

module.exports = { Cart };
