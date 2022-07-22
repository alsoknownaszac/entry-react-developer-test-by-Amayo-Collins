import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { ContainerDiv } from "./ProductContainer.styled";

export default class ProductContainer extends Component {
  render() {
    return (
      //display all products here or by catgeory
      <ContainerDiv>
        {this.props.productData?.map((item) => {
          return <ProductCard key={item.id} productInfo={item} />;
        })}
      </ContainerDiv>
    );
  }
}
