import React, { Component } from "react";
import {
  CartBtnContainer,
  CartSummaryContainer,
  CheckOutBtn,
  OrderBtnLg,
  ViewBagBtn,
} from "./CartSummary.styled";

export default class CartSummary extends Component {
  render() {
    const { lgCart, currency, totalCartAmount, numberOfCartItem, cart } =
      this.props;

    // tax percentage
    const percent = 21;

    //tax
    let lgCartTax;
    // total = mini-cart subtotal + tax
    let lgCartSum;

    // calculates the tax from the mini cart subtotal and the total after adding the tax
    if (totalCartAmount) {
      lgCartTax = totalCartAmount * (percent / 100);
      lgCartSum = (Number(totalCartAmount) + lgCartTax).toFixed(2);
    }

    return (
      <CartSummaryContainer lgCart={lgCart}>
        {/* if the url is cart page and there is a product added to cart*/}
        {lgCart && numberOfCartItem > 0 && (
          <div className="cart-summary cs-mb">
            <div className="title">Tax {percent}%:</div>
            <div className="amount">
              {currency.symbol} {lgCartTax.toFixed(2)}
            </div>
          </div>
        )}
        {/* if the url is cart page */}
        {lgCart && (
          <div className="cart-summary cs-mb">
            <div className="title">Quantity:</div>
            <div className="amount">{numberOfCartItem}</div>
          </div>
        )}

        <div className="cart-summary cs-last">
          <div className="title bold">Total:</div>
          <div className="amount">
            {currency.symbol} {lgCart ? lgCartSum : totalCartAmount}
          </div>
        </div>
        {/* if the url is cart page otherwise it should be mini-cart */}
        {lgCart ? (
          <OrderBtnLg
            onClick={() => console.log(cart)}
            disabled={numberOfCartItem === 0}
          >
            ORDER
          </OrderBtnLg>
        ) : (
          <CartBtnContainer>
            <ViewBagBtn disabled={numberOfCartItem === 0} to="/cart">
              VIEW BAG
            </ViewBagBtn>
            <CheckOutBtn
              onClick={() => console.log(cart)}
              disabled={numberOfCartItem === 0}
            >
              CHECKOUT
            </CheckOutBtn>
          </CartBtnContainer>
        )}
      </CartSummaryContainer>
    );
  }
}
