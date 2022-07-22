import { gql } from "@apollo/client";

export const GET_SINGLE_PRODUCT = gql`
  query GetSingleProduct($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        amount
        currency {
          label
          symbol
        }
      }
      brand
    }
  }
`;
