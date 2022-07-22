import React, { Component } from "react";
import { connect } from "react-redux";
import { addAttr } from "../../features/selectedAttributes/selectedAttrSlice";
import {
  ProductDetailsContainer,
  AttributesContainer,
  AttributesCard,
  ColorCard,
} from "./ProductDetails.styled";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = null;
    this.handleAttrChange = this.handleAttrChange.bind(this);
    this.addAttr = this.props.addAttr.bind(this);
  }

  // function that sets the selected attributes of each
  // individual product whenever the mini cart modal is clicked open

  componentDidMount = () => {
    if (this.props.isCart) {
      this.setState(this.props.selectedAttrCart);
    } else this.setState(this.props.selectedAttr);
  };

  componentDidUpdate = (nextProps) => {
    if (nextProps.selectedAttr !== this.props.selectedAttr) {
      this.setState(this.props.selectedAttr);
    }
  };

  handleAttrChange(target) {
    // adding attributes selected by user to the product object
    if (this.props.isCart) return null;
    this.addAttr(target);
  }

  render() {
    const {
      isCart,
      lgCart,
      lgDetails,
      lgTextTransform,
      nameFontStyle,
      nameWeightStyle,
      labelFontStyle,
      priceFontStyle,
      productBrand,
      productName,
      cartDetails,
      currency,
      attributes,
      sizeFontStyle,
      prices,
    } = this.props;

    return (
      <ProductDetailsContainer
        lgDetails={lgDetails}
        lgCart={lgCart}
        nameFontStyle={nameFontStyle}
        nameWeightStyle={nameWeightStyle}
        labelFontStyle={labelFontStyle}
        priceFontStyle={priceFontStyle}
        lgTextTransform={lgTextTransform}
      >
        <div className="product-name-n-type">
          <div className="product-name">{productBrand}</div>
          {productName}
        </div>
        {/* display the price here if the url is the cart page or mini cart */}
        {!cartDetails && (
          <div className="details">
            <div className="product-label">Price</div>
            {prices.map(
              (price) =>
                currency.symbol === price.currency.symbol && (
                  <div key={price.amount} className="price">
                    {price.currency.symbol} {price.amount}
                  </div>
                )
            )}
          </div>
        )}
        {/* attributes collection displayed here */}
        {attributes?.map((attributeData) => {
          const attributeName = attributeData.id;
          return (
            <div key={attributeData.id} className="details">
              <div className="product-label">{attributeData.id}</div>
              <AttributesContainer>
                {attributeData.items.map((itemData) =>
                  // display the attributes collection of other different properties seperate from the attributes collection including color because of styling
                  attributeData.id !== "Color" ? (
                    <AttributesCard
                      // display the attributes selected by user as selected on the mini-cart and the cart page
                      attributeSelected={
                        itemData.value === this.state?.[attributeName]
                      }
                      sizeFontStyle={sizeFontStyle}
                      isCart={isCart}
                      lgCart={lgCart}
                      key={itemData.id}
                      name={attributeData.id}
                      value={itemData.value}
                      // change the selected attributes only in the product description page
                      onClick={({ target }) => this.handleAttrChange(target)}
                    >
                      {itemData.value}
                    </AttributesCard>
                  ) : (
                    <ColorCard
                      // display the attributes selected by user as selected on the mini-cart and the cart page
                      attributeSelected={
                        itemData.value === this.state?.[attributeName]
                      }
                      isCart={isCart}
                      lgCart={lgCart}
                      colorBgStyle={itemData.value}
                      key={itemData.id}
                    >
                      <div
                        name={attributeData.id}
                        value={itemData.value}
                        // change the selected attributes only in the product description page
                        onClick={({ target }) => this.handleAttrChange(target)}
                        className="colors"
                      ></div>
                    </ColorCard>
                  )
                )}
              </AttributesContainer>
            </div>
          );
        })}

        {/* display the price here if the url is the product description page */}
        {cartDetails && (
          <div className="details">
            <div className="product-label">Price</div>
            {prices.map(
              (price) =>
                currency.symbol === price.currency.symbol && (
                  <div key={price.amount} className="price">
                    {price.currency.symbol} {price.amount}
                  </div>
                )
            )}
          </div>
        )}
      </ProductDetailsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency.value,
    selectedAttr: state.selectedAttr.value,
  };
};

const mapDispatchToProps = { addAttr };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
