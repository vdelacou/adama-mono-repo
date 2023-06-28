import { calculateTotalPrice } from './';

describe('Price Calculator', () => {
  it('should calculate the total price without tax', () => {
    const numberOfItems = 3;
    const pricePerItem = 1.21;
    const taxRate = 0;
    const expectedTotalPrice = '3.63 €';

    const totalPrice = calculateTotalPrice(numberOfItems, pricePerItem, taxRate);

    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  it('should calculate the total price with tax', () => {
    const numberOfItems = 3;
    const pricePerItem = 1.21;
    const taxRate = 5;
    const expectedTotalPrice = '3.81 €';

    const totalPrice = calculateTotalPrice(numberOfItems, pricePerItem, taxRate);

    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  it('should calculate the total price with 20% tax', () => {
    const numberOfItems = 3;
    const pricePerItem = 1.21;
    const taxRate = 20;
    const expectedTotalPrice = '4.36 €';

    const totalPrice = calculateTotalPrice(numberOfItems, pricePerItem, taxRate);

    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  it('should calculate the total price with tax and 3% discount', () => {
    const numberOfItems = 5;
    const pricePerItem = 345;
    const taxRate = 10;
    const expectedTotalPrice = '1840.58 €';

    const totalPrice = calculateTotalPrice(numberOfItems, pricePerItem, taxRate);

    expect(totalPrice).toEqual(expectedTotalPrice);
  });

  it('should calculate the total price with tax and 5% discount', () => {
    const numberOfItems = 5;
    const pricePerItem = 1299;
    const taxRate = 10;
    const expectedTotalPrice = '6787.28 €';

    const totalPrice = calculateTotalPrice(numberOfItems, pricePerItem, taxRate);

    expect(totalPrice).toEqual(expectedTotalPrice);
  });
});
