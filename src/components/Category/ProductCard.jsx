import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addToCart,
  incrementProductQuantity,
} from "../../features/cart/cartSlice";
import {
  AddToCartBtn,
  CartIcon,
  ImgWrapper,
  ProductDiv,
  ProductText,
  ProductWrapper,
} from "./ProductCard.styled";

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.wrapperRef = React.createRef();
    this.handleHoverOnProductCard = this.handleHoverOnProductCard.bind(this);
  }

  // display add to cart button on hover of the product card
  componentDidMount() {
    document.addEventListener("mouseover", this.handleHoverOnProductCard);
  }

  // remove add to cart button on hover of the product card
  componentWillUnmount() {
    document.removeEventListener("mouseover", this.handleHoverOnProductCard);
  }

  // function to toggle the add-to-cart button to display or not
  handleHoverOnProductCard(event) {
    if (this.wrapperRef && this.wrapperRef.current?.contains(event.target)) {
      this.setState({
        open: true,
      });
    } else
      this.setState({
        open: false,
      });
  }

  render() {
    const { productInfo, currency, cart, addToCart, incrementProductQuantity } =
      this.props;

    const { id, category, gallery, brand, name, prices, inStock, attributes } =
      productInfo;

    const { open } = this.state;

    // attributes selected by user is store in the attrData variable
    let attrData;
    attributes.forEach((val) => {
      return (attrData = { ...attrData, [val.id]: val.items[0].value });
    });

    // product object to be added by the user to the cart
    const productObj = {
      id,
      brand,
      name,
      prices,
      gallery,
      attributes,
      quantity: 1,
      cartPrices: prices,
      selectedAttributes: attrData,
    };

    //function to add a product to the cart
    // product with same attributes stack in the cart, otherwise a product with different attributes appears as separate cart items.
    function HandleAddToCart() {
      productObj.id = productObj.id + "-" + Math.floor(Math.random() * 20);
      let id;
      let cartIncludes = cart.some((item) => {
        let slctAttr = Object.keys(item.selectedAttributes);
        let prdAttr = Object.keys(productObj.selectedAttributes);
        id = item.id;
        return (
          item.brand === productObj.brand &&
          item.selectedAttributes[slctAttr] ===
            productObj.selectedAttributes[prdAttr]
        );
      });
      cartIncludes ? incrementProductQuantity(id) : addToCart(productObj);
    }

    return (
      <ProductWrapper ref={this.wrapperRef}>
        {/* link to a specific product details page */}
        <ProductDiv to={`/${category}/${id}`}>
          <ImgWrapper outOfStock={!inStock}>
            <img src={gallery[0]} alt={brand + " " + name} className="img" />
            <div className="out-of-stock-text">OUT OF STOCK</div>
          </ImgWrapper>
          {/* if product is out of stock then display an out of stock overlay */}
          <ProductText outOfStock={!inStock}>
            {brand + " " + name}
            {prices.map(
              (price) =>
                currency.symbol === price.currency.symbol && (
                  <div key={price.amount} className="amount">
                    {price.currency.symbol + " " + price.amount}
                  </div>
                )
            )}
          </ProductText>
        </ProductDiv>
        {/* if product is out of stock then prevent the add-to-cart btn from showing otherwise display btn on hover */}
        {inStock && open && (
          <AddToCartBtn onClick={HandleAddToCart}>
            <CartIcon />
          </AddToCartBtn>
        )}
      </ProductWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.value,
    cart: state.cart.value,
  };
};

const mapDispatchToProps = { addToCart, incrementProductQuantity };

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
