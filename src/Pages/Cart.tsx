import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import Carts from "../component/Cart/cart";
import Navbar01 from "../component/NavBars/navbar01";
import Footer from "../component/Footer/Footer";
export default class Cart extends Component {
  render() {
    return (
      <>
        <Navbar01 />
        <Carts />
        <Footer />
      </>
    );
  }
}
