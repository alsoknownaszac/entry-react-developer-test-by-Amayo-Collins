import React, { Component } from "react";
import ProductContainer from "../components/Category/ProductContainer";
import Layout from "../components/Layout/Layout";
import { withParams } from "../utility/withParams";
import { Query } from "@apollo/client/react/components";
import { GET_PRODUCTS_BY_CATEGORY } from "../query/getProductsByCategory";
import { ErrorHandling } from "../components/Container/ErrorHandling.styled";

class Category extends Component {
  render() {
    // category params from the url
    let { category } = this.props.params;

    // query to get all products or products categories
    return (
      <Query
        query={GET_PRODUCTS_BY_CATEGORY}
        variables={{
          input: {
            title: category,
          },
        }}
        fetchPolicy={"no-cache"}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <ErrorHandling>Loading...</ErrorHandling>;
          if (error)
            return <ErrorHandling>Something went wrong: {error}</ErrorHandling>;
          return (
            <Layout
              titleSize="42px"
              titleMb="103px"
              pageTitle={data.category.name}
            >
              <ProductContainer productData={data.category.products} />
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default withParams(Category);
