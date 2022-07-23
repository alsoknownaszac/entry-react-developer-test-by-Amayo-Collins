import React, { Component } from "react";
import BasicSelect from "../Basic/BasicSelect";
import BasicModal from "../Basic/BasicModal";
import CartContainer from "../Cart/CartContainer";
import { connect } from "react-redux";
import { Query } from "@apollo/client/react/components";
import { GET_CATEGORIES } from "../../query/getCategories";
import { GET_CURRENCIES } from "../../query/getCurrencies";
import { changeCurrency } from "../../features/currency/currencySlice";
import {
  NavFixed,
  NavWrapper,
  Tabs,
  LogoImg,
  ActionsWrapper,
  CartWrapper,
  BagContainer,
  CartIcon,
} from "./Nav.styled";
import { withRouter } from "../../utility/withRouter";
import { useCartSum } from "../../utility/useCartSum";
import CartSummary from "../Cart/CartSummary";
import { EmptyCartState } from "../Cart/EmptyCartState";
import { ErrorHandling } from "../Container/ErrorHandling.styled";

// cart modal btn that displays the number of products added to the cart
const Cart = ({ cartItems }) => {
  return (
    <CartWrapper>
      <CartIcon />
      <div className="count noselect">{cartItems}</div>
    </CartWrapper>
  );
};

export class Nav extends Component {
  render() {
    const { location, currency, changeCurrency, cart, emptyState } = this.props;

    // calculates the total amount product on cart
    let numberOfCartItem = cart.reduce((acc, curVal) => {
      return acc + curVal.quantity;
    }, 0);

    // page url to toggle btw categories
    const pageUrl = location.pathname.split("/")[1];

    // calculates the sub total prices of all products added
    const sum = new useCartSum(cart, currency);

    return (
      <NavFixed>
        <NavWrapper>
          {/* query to get all categories */}
          <Query query={GET_CATEGORIES}>
            {({ loading, error, data }) => {
              if (loading) return <ErrorHandling>Loading...</ErrorHandling>;
              if (error)
                return (
                  <ErrorHandling>Something went wrong: {error}</ErrorHandling>
                );
              return (
                <div className="category-tab">
                  {data?.categories.map((item) => {
                    return (
                      <Tabs
                        selected={item.name === pageUrl}
                        to={`/${item.name}`}
                        key={item.name}
                      >
                        {item.name}
                      </Tabs>
                    );
                  })}
                </div>
              );
            }}
          </Query>
          <LogoImg />
          <ActionsWrapper>
            {/* query to get all currencies */}
            <Query query={GET_CURRENCIES}>
              {({ loading, error, data }) => {
                if (loading) return <ErrorHandling>Loading...</ErrorHandling>;
                if (error)
                  return (
                    <ErrorHandling>Something went wrong: {error}</ErrorHandling>
                  );
                return (
                  <BasicSelect
                    currency={currency}
                    query={data.currencies}
                    changeCurrency={changeCurrency}
                  />
                );
              }}
            </Query>
            {/* cart modal btn */}
            <BasicModal btn={<Cart cartItems={numberOfCartItem} />}>
              <BagContainer>
                <span className="title">My Bag, </span>
                {numberOfCartItem} items
              </BagContainer>
              {/* empty state */}
              {numberOfCartItem < 1 && emptyState}
              {/* displays the cart collection */}
              {cart.map((item) => (
                <CartContainer key={item.id} productData={item} />
              ))}
              {/* the total amount and the mini-cart and cart page btn passed as a component */}
              <CartSummary
                cart={cart}
                currency={currency}
                totalCartAmount={sum.cartSum()}
                numberOfCartItem={numberOfCartItem}
              />
            </BasicModal>
          </ActionsWrapper>
        </NavWrapper>
      </NavFixed>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.value,
    cart: state.cart.value,
  };
};

const mapDispatchToProps = { changeCurrency };

export default EmptyCartState(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
);
