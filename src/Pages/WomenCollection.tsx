import React, { Component } from "react";
import Navbar01 from "../component/NavBars/navbar01";
import Footer from "../component/Footer/Footer";
import WomenCollectionPage from "../component/Collections/WomenCollectionPage";

export default class WomenCollection extends Component {
  render() {
    return (
      <>
        <Navbar01 />
        <WomenCollectionPage />
        <Footer />
      </>
    );
  }
}
