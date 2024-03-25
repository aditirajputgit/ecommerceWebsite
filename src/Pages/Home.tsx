import React, { Component } from 'react'
import Navbar01 from '../component/NavBars/navbar01'
import Footer from '../component/Footer/Footer'
import Home01 from '../component/Home/Home01'
export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar01/>
        <Home01/>
        <Footer/>
      </>
    )
  }
}
