import { Box, Button, Grid, OutlinedInput, Typography, styled } from '@material-ui/core'
import React, { Component } from 'react'
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "@material-ui/icons/Dashboard";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";


const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur ",
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content:
        "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
    },
    {
      title: "What is the package version",
      content: "v1.0.5",
    },
  ],
};

export default class Footer extends Component {
  render() {
    return (
      <>
        <FooterStyle>
          <Box className="footerConatiner">
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    Kalles
                  </Typography>
                  <Box className="addressStyle">
                    <LocationOnIcon style={{ marginRight: "10px" }} />
                    <Typography>
                      Khajrana Ring Road Indore , Madhya Pradesh
                    </Typography>
                  </Box>
                  <Box className="addressStyle">
                    <LocationOnIcon style={{ marginRight: "10px" }} />
                    <Typography>contact@aditi.com</Typography>
                  </Box>
                  <Box className="addressStyle">
                    <CallIcon style={{ marginRight: "10px" }} />
                    <Typography>+91 92003 92475</Typography>
                  </Box>
                  <Box>
                    <FontAwesomeIcon icon={faFaceSurprise} />
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faPenNib} />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={2}>
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    Catergories
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>Men</Typography>
                  <Typography style={{ marginTop: "20px" }}>Women</Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Accessories
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>Shoes</Typography>
                  <Typography style={{ marginTop: "20px" }}>Watch</Typography>
                  <Typography style={{ marginTop: "20px" }}> Dress</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={2}>
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    Information
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    {" "}
                    About us
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    {" "}
                    Contact us
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    {" "}
                    Terms & Conditions
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Return & Exchange
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Shipping & Delivery
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Privacy Policy
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={2}>
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    Useful links
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Latest News
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    My Account
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>
                    Size Guide
                  </Typography>
                  <Typography style={{ marginTop: "20px" }}>FAQs</Typography>
                  <Typography style={{ marginTop: "20px" }}>FAQs2</Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box>
                  <Typography
                    variant="h6"
                    style={{ fontWeight: "bold", color: "black" }}
                  >
                    Newsletter Signup
                  </Typography>
                  <Typography>
                    Subscribe to our newsletter and get 10% off your first
                    purchase
                  </Typography>
                  <Box className="searchingnewsLetters">
                    <OutlinedInput className="searchingnewsLetter" />
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        position: "absolute",
                      }}
                    >
                      Click me
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </FooterStyle>
        <FooterReserved>
          <Box className="footerRes">
            <Box>
              <Typography>All Rights Reserved 2024 Aditi</Typography>
            </Box>
            <Box className="footerIcon">
              <Typography style={{ marginRight: "15px" }}>Shop</Typography>
              <Typography style={{ marginRight: "15px" }}>
                Contact us
              </Typography>
              <Typography style={{ marginRight: "15px" }}>About us</Typography>
              <Typography style={{ marginRight: "15px" }}>Blog</Typography>
            </Box>
          </Box>
          <Box className="foooterSmallSize">
            <Box className="footerIconSmall">
              <DashboardIcon />
              <Typography>Shop</Typography>
            </Box>
            <Box className="footerIconSmall">
              <FavoriteBorderIcon />
              <Typography>Wishlist</Typography>
            </Box>
            <Box className="footerIconSmall">
              <ShoppingCartIcon />
              <Typography>Cart</Typography>
            </Box>
            <Box className="footerIconSmall">
              <PersonIcon />
              <Typography>Account</Typography>
            </Box>
            <Box className="footerIconSmall">
              <SearchIcon />
              <Typography>Search</Typography>
            </Box>
          </Box>
          
        </FooterReserved>
      </>
    );
  }
}

const FooterStyle = styled(Box)({
  backgroundColor: "#f6f6f8",
  padding:'2rem',
  "& .footerConatiner":{
    display:'flex',
    color:"grey"
  },
  "& .addressStyle":{
    display:"flex",
    color:'grey',
    marginTop:"20px"
  },
  "& .searchingnewsLetters":{
    border:"1px solid black",
 
  },
  "& .searchingnewsLetter":{
    height:'45px',
    position:"relative",
    border:"none",
  }
});

const FooterReserved = styled(Box)({
  padding: "20px",
  marginTop: "20px",
  color: "grey",
  "& .footerRes": {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:979px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginBottom: "40px",
    },
  },
  "& .footerIcon": {
    display: "flex",
    justifyContent: "space-around",
  },
  "& .foooterSmallSize": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "1px -17px 14px -11px rgba(0,0,0,0.75)",
    color: "black",
    "@media (min-width:979px)": {
      display: "none",
    },
  },
  "& .footerIconSmall": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});