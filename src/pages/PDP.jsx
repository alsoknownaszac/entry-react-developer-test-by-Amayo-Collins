import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import PDPContainer from "../components/PDP/PDPContainer";
import { withParams } from "../utility/withParams";
import { Query } from "@apollo/client/react/components";
import { GET_SINGLE_PRODUCT } from "../query/getSingleProduct";
import { ErrorHandling } from "../components/Container/ErrorHandling.styled";

class PDP extends Component {
  render() {
    // product id params from the url
    let { id } = this.props.params;

    // query to get single product by id
    return (
      <Query
        query={GET_SINGLE_PRODUCT}
        variables={{
          productId: id,
        }}
        fetchPolicy={"no-cache"}
      >
        {({ loading, error, data }) => {
          if (loading) return <ErrorHandling>Loading...</ErrorHandling>;
          if (error)
            return <ErrorHandling>Something went wrong: {error}</ErrorHandling>;
          return (
            <Layout>
              <PDPContainer productData={data} />
            </Layout>
          );
        }}
      </Query>
    );
  }
}

export default withParams(PDP);
