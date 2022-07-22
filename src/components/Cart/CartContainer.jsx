import React, { Component } from "react";
import ProductDetails from "../PDP/ProductDetails";
import {
  MdKeyboardArrowRight as RightArrow,
  MdKeyboardArrowLeft as LeftArrow,
} from "react-icons/md";
import { BiMinus as Minus, BiPlus as Plus } from "react-icons/bi";
import { connect } from "react-redux";
import { selectCurrency } from "../../features/currency/currencySlice";
import { ContainerDiv } from "./CartContainer.styled";
import {
  addAttrCart,
  clearAttr,
} from "../../features/selectedAttributes/selectedAttrSlice";
import {
  incrementProductQuantity,
  decrementProductQuantity,
} from "../../features/cart/cartSlice";

class CartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementProductQuantity =
      this.props.incrementProductQuantity.bind(this);
    this.decrementProductQuantity =
      this.props.decrementProductQuantity.bind(this);
  }

  //when a user leaves the page reset the selected attributes
  componentWillUnmount() {
    this.props.clearAttr();
  }

  render() {
    const { lgCart, lgTextTransform, productData } = this.props;

    const {
      id,
      name,
      gallery,
      attributes,
      brand,
      quantity,
      selectedAttributes,
      cartPrices,
    } = productData;

    return (
      <ContainerDiv lgCart={lgCart}>
        <div className={`${lgCart && "hr"} cart-item-container`}>
          {/* product details passed as a component */}
          <ProductDetails
            isCart
            lgCart={lgCart}
            lgTextTransform={lgTextTransform}
            nameFontStyle={lgCart ? "30px" : "16px"}
            nameWeightStyle={lgCart ? "600" : "400"}
            labelFontStyle={lgCart ? "18px" : "14px"}
            sizeFontStyle={lgCart ? "18px" : "14px"}
            priceFontStyle={lgCart ? "24px" : "16px"}
            productId={id}
            productBrand={brand}
            productName={name}
            attributes={attributes}
            prices={cartPrices}
            selectedAttrCart={selectedAttributes}
          />
          <div className="cart-order-container">
            <div className="cart-order">
              <div
                // function from cart reducer to increment the added product quantity
                onClick={() => this.incrementProductQuantity(id)}
                className="change-quantity-btn"
              >
                <Plus />
              </div>
              <div className="cart-quantity">{quantity}</div>
              <div
                // function from cart reducer to decrement the added product quantity
                onClick={() => this.decrementProductQuantity(id)}
                className="change-quantity-btn"
              >
                <Minus />
              </div>
            </div>
            <div className="cart-images-container">
              <img
                src={gallery[this.state.count]}
                alt="cart-images"
                className="cart-images"
              />
              {/* if the url is cart page and the product has more than one image*/}
              {lgCart && gallery.length > 1 && (
                <div className="change-image-container">
                  <button
                    // display next image
                    onClick={() =>
                      this.setState({
                        count: this.state.count - 1,
                      })
                    }
                    // disable button when the image is the first from the image collection
                    className={`change-img-btn img-mr ${
                      this.state.count === 0 ? "disabledBtn" : "clickableBtn"
                    }`}
                    disabled={this.state.count === 0}
                  >
                    <LeftArrow />
                  </button>
                  <button
                    // display previous image
                    onClick={() =>
                      this.setState({
                        count: this.state.count + 1,
                      })
                    }
                    // disable button when the image is the last from the image collection
                    className={`change-img-btn ${
                      this.state.count === gallery.length - 1
                        ? "disabledBtn"
                        : "clickableBtn"
                    }`}
                    disabled={this.state.count === gallery.length - 1}
                  >
                    <RightArrow />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContainerDiv>
    );
  }
}

const mapStateToProps = selectCurrency;

const mapDispatchToProps = {
  addAttrCart,
  clearAttr,
  incrementProductQuantity,
  decrementProductQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
