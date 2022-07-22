export class useCartSum {
  constructor(cartData, currency) {
    this.cartData = cartData;
    this.currency = currency;
  }

  cartSum() {
    let cartPrices = [];
    this.cartData.forEach((item) =>
      item.cartPrices.forEach((curVal) => {
        if (curVal.currency.symbol === this.currency.symbol) {
          cartPrices.push(curVal.amount);
        }
      })
    );

    let totalCartAmount = cartPrices.reduce((acc, curVal) => {
      return acc + curVal;
    }, 0);

    return totalCartAmount.toFixed(2);
  }
}
