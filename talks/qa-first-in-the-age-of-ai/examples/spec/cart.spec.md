# Specification: Shopping Cart

## Rules

1. **Add item** — each item has a name, unit price (BRL), and quantity ≥ 1.
2. **Total** — sum of (price × quantity) for all items.
3. **Discount** — when total exceeds R$ 100.00, apply a **10% discount** on the total.
4. **Invalid quantity** — adding an item with quantity < 1 must throw an error.
5. **Empty cart** — total of an empty cart is R$ 0.00.

## Examples

| Scenario | Items | Expected total |
|---|---|---|
| Single item, no discount | 1× Widget @ R$ 50 | R$ 50.00 |
| Multiple items, no discount | 2× Widget @ R$ 30 | R$ 60.00 |
| Discount triggered | 3× Widget @ R$ 40 | R$ 108.00 → **R$ 97.20** |
| Empty cart | — | R$ 0.00 |
| Invalid quantity | qty = 0 | throws Error |
