function calculateCartTotal(items) {
  if (!Array.isArray(items)) {
    throw new Error("A kosár tartalma nem lista");
  }

  return items.reduce((sum, item) => {
    if (
      typeof item.price !== "number" ||
      typeof item.quantity !== "number" ||
      item.price < 0 ||
      item.quantity < 0
    ) {
      throw new Error("Érvénytelen ár vagy mennyiség");
    }

    return sum + item.price * item.quantity;
  }, 0);
}

module.exports = {
  calculateCartTotal,
};
