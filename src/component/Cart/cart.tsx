import { Box, Button, Grid, styled, Typography } from "@material-ui/core";
import React, { Component } from "react";
import RemoveShoppingCartOutlinedIcon from "@material-ui/icons/RemoveShoppingCartOutlined";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Carts extends Component {
  onCartIsEmpty = () => {
    return (
      <>
        <OnCartEmpty>
          <Box className="boxEmpty">
            <RemoveShoppingCartOutlinedIcon />
            <Typography variant="h3">YOUR CART IS EMPTY</Typography>
            <Typography style={{ color: "grey", marginTop: "10px" }}>
              Before proceed to checkout you must add some product to your
              shopping cart.
            </Typography>
            <Typography style={{ color: "grey" }}>
              You will find a lot of intersting product on our "shop page
            </Typography>
            <Link to={"/"} className="nav-link">
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "15px 0px" }}
              >
                RETURN TO SHOP
              </Button>
            </Link>
            <Typography>Free shipping for all orders over $100.00</Typography>
          </Box>
        </OnCartEmpty>
      </>
    );
  };

  onCartIsNotEmpty = () => {
    return (
      <>
        <OnCartIsNotEmpty>
          <Box className="onCartProduct">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className="onCartProducts">
                  <Box className="onCartImage">g</Box>
                  <Box className="onCarts">
                    <Typography>Cream women pants</Typography>
                    <DeleteIcon />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <Box className="onCartQuanties">
                  <Grid container spacing={3}>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <Box className="cartPrice">
                        <Typography>Price</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <Box className="cartPrice">
                        <Typography>Quantity</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                      <Box className="cartPrice">
                        <Typography>Total</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </OnCartIsNotEmpty>
      </>
    );
  };

  render() {
    return (
      <>
        <CartStyled>
          <Box className="cartBackgroundImage">
            <Typography variant="h4">Shopping Cart</Typography>
          </Box>
          <Box>{this.onCartIsEmpty()}</Box>
          {this.onCartIsNotEmpty()}
        </CartStyled>
      </>
    );
  }
}

const CartStyled = styled(Box)({
  "& .cartBackgroundImage": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10rem",
    backgroundSize: "cover",
    backgroundImage:
      "url('https://img.freepik.com/free-photo/uncooked-organic-eggs-metal-trolley_114579-25410.jpg?t=st=1711431177~exp=1711434777~hmac=ad533dbada79ec151fa28b0b734ac6ed5aafae190439734583c324eb8eb5ccd3&w=740')",
  },
});

const OnCartEmpty = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  margin: "150px 0px",
  "& .boxEmpty": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
});

const OnCartIsNotEmpty = styled(Box)({
  marginTop: "50px",
  padding: "20px",
  height: "min-content",

  "& .onCartProduct": {
    width: "95vw",
    height: "200px",
    position: "relative",
    border: "solid 1px black",
    "@media (max-width:959px)": {
      marginBottom: 30,
    },
  },
  "& .onCartQuanties": {
    // width: "95vw",
    height: "200px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width:959px)": {
      border: "1px solid black",
      height: "40px",
    },
  },

  "& .shoppingCart": {
    backgroundColor: "pink",
    height: "250px",
    width: "100%",
  },
  "& .onCartImage": {
    backgroundColor: "pink",
    height: "200px",
    width: "150px",
  },

  "& .onCartProducts": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  "& .onCarts": {
    marginLeft: "25px",
  },
  "& .cartPrice": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
});
