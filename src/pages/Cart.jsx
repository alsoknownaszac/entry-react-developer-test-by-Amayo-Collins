import React, { Component } from "react";
import CartContainer from "../components/Cart/CartContainer";
import Layout from "../components/Layout/Layout";
import { connect } from "react-redux";
import CartSummary from "../components/Cart/CartSummary";
import { useCartSum } from "../utility/useCartSum";
import { HorzRule } from "../components/Cart/CartContainer.styled";
import { EmptyCartState } from "../components/Cart/EmptyCartState";

class Cart extends Component {
  render() {
    const { cart, currency, emptyState } = this.props;

    // calculates the total amount product on cart
    let numberOfCartItem = cart.reduce((acc, curVal) => {
      return acc + curVal.quantity;
    }, 0);

    // calculates the sub total prices of all products added
    const sum = new useCartSum(cart, currency);

    return (
      <Layout
        titleWeight="700"
        titleSize="32px"
        titleMb="55px"
        pageTitle="Cart"
      >
        {/* horizonatl line */}
        <HorzRule cartItems={numberOfCartItem} />
        {/* empty state */}
        {numberOfCartItem < 1 && emptyState}
        {/* displays the cart collection */}
        {cart.map((item, idx) => (
          <CartContainer
            idx={idx}
            lgCart
            lgDetails
            lgTextTransform
            key={item.id + idx}
            productData={item}
          />
        ))}
        {/* the total amount and the mini-cart and cart page btn passed as a component */}
        <CartSummary
          lgCart
          cart={cart}
          currency={currency}
          totalCartAmount={sum.cartSum()}
          numberOfCartItem={numberOfCartItem}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.value,
    cart: state.cart.value,
  };
};

export default EmptyCartState(connect(mapStateToProps)(Cart));
