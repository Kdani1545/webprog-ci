const { calculateCartTotal } = require("../../src/services/cartService");

test("kiszámolja a kosár végösszegét", () => {
  const items = [
    { productId: 1, price: 1000, quantity: 2 },
    { productId: 2, price: 500, quantity: 1 },
  ];

  const result = calculateCartTotal(items);

  expect(result).toBe(2500);
});

test("üres kosár összege nulla", () => {
  expect(calculateCartTotal([])).toBe(0);
});

test("hibát dob, ha a bemenet nem lista", () => {
  expect(() => calculateCartTotal(null)).toThrow("A kosár tartalma nem lista");
});

test("hibát dob negatív ár esetén", () => {
  const items = [{ productId: 1, price: -100, quantity: 1 }];

  expect(() => calculateCartTotal(items)).toThrow("Érvénytelen ár vagy mennyiség");
});
