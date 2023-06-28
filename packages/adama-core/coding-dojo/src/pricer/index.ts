const calculateSubtotal = (numberOfItems: number, pricePerItem: number): number => {
  return numberOfItems * pricePerItem;
};

const applyTax = (subtotal: number, taxRate: number): number => {
  return subtotal * (1 + taxRate / 100);
};

const formatPrice = (price: number): string => {
  return price.toFixed(2) + ' €';
};

const DISCOUNT_THRESHOLDS = [
  { threshold: 5000, discountRate: 0.05 },
  { threshold: 1000, discountRate: 0.03 },
];

const calculateDiscountRate = (subtotal: number): number => {
  for (const { threshold, discountRate } of DISCOUNT_THRESHOLDS) {
    if (subtotal >= threshold) {
      return 1 - discountRate;
    }
  }
  return 1;
};

const applyDiscount = (subtotal: number): number => {
  const discountRate = calculateDiscountRate(subtotal);
  return subtotal * discountRate;
};

export const calculateTotalPrice = (numberOfItems: number, pricePerItem: number, taxRate: number): string => {
  const subtotal = calculateSubtotal(numberOfItems, pricePerItem);
  const discountedSubtotal = applyDiscount(subtotal);
  const totalPriceWithTax = applyTax(discountedSubtotal, taxRate);

  return formatPrice(totalPriceWithTax);
};
