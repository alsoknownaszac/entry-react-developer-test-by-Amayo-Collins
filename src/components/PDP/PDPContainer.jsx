import React, { Component } from "react";
import {
  ContainerDiv,
  MainImage,
  ProductDescription,
} from "./PDPContainer.styled";
import ProductDetails from "./ProductDetails";
import { connect } from "react-redux";
import {
  addToCart,
  incrementProductQuantity,
} from "../../features/cart/cartSlice";
import { clearAttr } from "../../features/selectedAttributes/selectedAttrSlice";
import { withNavigate } from "../../utility/withNavigate";
import { Interweave } from "interweave";

class PDPContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstImg: { idx: 0, imgUrl: this.props.productData?.product.gallery[0] },
    };
    this.setURl = this.setURl.bind(this);
  }

  //when a user leaves the page reset the selected attributes
  componentWillUnmount() {
    this.props.clearAttr();
  }

  // displays the image clicked as the main image
  setURl(idx, item) {
    this.setState({
      firstImg: { idx: idx, imgUrl: item },
    });
  }

  render() {
    const {
      productData,
      selectedAttr,
      addToCart,
      incrementProductQuantity,
      cart,
      navigate,
    } = this.props;

    const {
      id,
      name,
      gallery,
      description,
      attributes,
      prices,
      brand,
      inStock,
    } = productData?.product;

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
      selectedAttributes: selectedAttr,
    };

    //function to add a product to the cart
    // product with same attributes stack in the cart, otherwise a product with different attributes appears as separate cart items.
    function HandleAddToCart() {
      let id;
      productObj.id = productObj.id + "-" + Math.floor(Math.random() * 20);
      let cartIncludes = cart.some((item) => {
        let slctAttr = Object.keys(item.selectedAttributes);
        let prdAttr = Object.keys(productObj.selectedAttributes);
        id = item.id;
        return (
          item.brand === productObj.brand &&
          item.name === productObj.name &&
          item.selectedAttributes[slctAttr] ===
            productObj.selectedAttributes[prdAttr]
        );
      });
      cartIncludes ? incrementProductQuantity(id) : addToCart(productObj);
    }

    return (
      <ContainerDiv>
        <div className="product-image-container">
          <div className="other-images-container">
            {/* other images */}
            {gallery.map(
              (item, itemIdx) =>
                itemIdx !== this.state.firstImg.idx && (
                  <div
                    onClick={() => this.setURl(itemIdx, item)}
                    key={item}
                    className="other-images"
                  >
                    <img src={item} alt={item} className="imgs" />
                  </div>
                )
            )}
          </div>
          {/* main image */}
          <MainImage outOfStock={!inStock}>
            <img
              src={this.state.firstImg.imgUrl}
              alt={this.state.firstImg.imgUrl}
              className="imgs"
            />
            <div className="out-of-stock-text">OUT OF STOCK</div>
          </MainImage>
        </div>
        <div className="product-details">
          {/* product details passed as a component */}
          <ProductDetails
            lgCart
            lgDetails
            lgTextTransform
            nameFontStyle="30px"
            nameWeightStyle="600"
            labelFontStyle="18px"
            sizeFontStyle="18px"
            priceFontStyle="24px"
            productBrand={brand}
            productName={name}
            attributes={attributes}
            prices={prices}
            cartDetails
          />
          {/* if the product is in stock display the add-to-cart btn */}
          {inStock && (
            <button
              onClick={HandleAddToCart}
              className="add-to-cart-btn"
              disabled={attributes?.length > 0 && selectedAttr === null}
            >
              ADD TO CART
            </button>
          )}
          {/* description is displayed as html */}
          <ProductDescription>
            <Interweave content={description} />
          </ProductDescription>
        </div>
      </ContainerDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedAttr: state.selectedAttr.value,
    cart: state.cart.value,
  };
};

const mapDispatchToProps = { addToCart, clearAttr, incrementProductQuantity };

export default withNavigate(
  connect(mapStateToProps, mapDispatchToProps)(PDPContainer)
);
