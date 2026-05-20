// Tests derived directly from spec/cart.spec.md
const { Cart } = require("../src/cart");

describe("Cart", () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test("empty cart totals R$ 0.00", () => {
    expect(cart.total()).toBe(0);
  });

  test("single item below discount threshold", () => {
    cart.addItem("Widget", 50, 1);
    expect(cart.total()).toBe(50);
  });

  test("multiple items below discount threshold", () => {
    cart.addItem("Widget", 30, 2);
    expect(cart.total()).toBe(60);
  });

  test("applies 10% discount when total exceeds R$ 100", () => {
    cart.addItem("Widget", 40, 3); // subtotal = 120
    expect(cart.total()).toBe(108); // 120 * 0.9
  });

  test("throws error when quantity is less than 1", () => {
    expect(() => cart.addItem("Widget", 50, 0)).toThrow(
      "Quantity must be at least 1"
    );
  });
});
