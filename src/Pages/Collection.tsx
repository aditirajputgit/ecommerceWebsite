import React, { Component } from "react";
import Navbar01 from "../component/NavBars/navbar01";
import Footer from "../component/Footer/Footer";
import FirstCollectionPage from "../component/Collections/FirstCollectionPage";

export default class Collection extends Component {
  render() {
    return (
      <>
        <Navbar01 />
        <FirstCollectionPage />
        <Footer />
      </>
    );
  }
}
