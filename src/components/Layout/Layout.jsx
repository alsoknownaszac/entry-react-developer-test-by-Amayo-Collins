import React, { Component } from "react";
import Nav from "../Naviagtion/Nav";
import { LayoutContent, LayoutDiv, PageTitle } from "./Layout.styled";

export default class Layout extends Component {
  render() {
    return (
      <LayoutDiv>
        <Nav />
        <LayoutContent>
          <div className="content">
            <PageTitle
              weight={this.props.titleWeight}
              size={this.props.titleSize}
              mb={this.props.titleMb}
            >
              {this.props.pageTitle}
            </PageTitle>
            {this.props.children}
          </div>
        </LayoutContent>
      </LayoutDiv>
    );
  }
}
