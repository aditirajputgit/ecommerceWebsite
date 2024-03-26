import {
  Badge,
  Box,
  Divider,
  Drawer,
  Typography,
  styled,
} from "@material-ui/core";
import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SimpleTabs from "../NavBars/Drawer";

import { Link } from "react-router-dom";

interface S {
  isDrawerOpen: boolean;
}

interface Props {}
export default class Navbar01 extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
  }

  render() {
    return (
      <>
        <Navbar01Style>
          <Box className="navbarStrip">
            <Box className="menuIcons">
              <MenuIcon onClick={() => this.setState({ isDrawerOpen: true })} />
            </Box>
            <Box>
              <Typography variant="h5">Kalles</Typography>
            </Box>
            <Box className="navbarItems">
              <Link
                to={"/"}
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <Typography className="navbaritem">Demo</Typography>
                </Box>
              </Link>
              <Link
                to={"/collection"}
                className="nav-link"
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <Typography className="navbaritem">Shop</Typography>
                </Box>
              </Link>
              <Box>
                <Typography className="navbaritem">Product</Typography>
              </Box>
              <Box>
                <Typography className="navbaritem">Sale</Typography>
              </Box>
              <Box>
                <Typography className="navbaritem">Pages</Typography>
              </Box>
              <Box>
                <Typography className="navbaritem">Blog</Typography>
              </Box>
              <Box>
                <Typography className="navbaritem">Buy Item</Typography>
              </Box>
            </Box>
            <Box className="navbarIcons mobileHidden">
              <SearchIcon
                style={{ marginRight: "20px" }}
                className="navbarIcon"
              />
              <PersonIcon
                style={{ marginRight: "20px" }}
                className="navbarIcon"
              />
              <Link to={"/cart"} className="nav-link">
                <Badge
                  badgeContent={4}
                  color="primary"
                  style={{ marginRight: "20px" }}
                >
                  <ShoppingCartIcon className="navbarIcon" />
                </Badge>
              </Link>
              <Badge
                badgeContent={4}
                color="primary"
                style={{ marginRight: "20px" }}
              >
                <FavoriteBorderIcon className="navbarIcon" />
              </Badge>
            </Box>
          </Box>
        </Navbar01Style>
        <Divider style={{ color: "black" }} />
        <Drawer
          anchor="left"
          open={this.state.isDrawerOpen}
          onClose={() => this.setState({ isDrawerOpen: false })}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <SliderPanelStyle>
            <Box className="navBar">
              <SimpleTabs />
            </Box>
            <Box className="closeIcon" style={{}}>
              <CloseIcon
                onClick={() => this.setState({ isDrawerOpen: false })}
              />
            </Box>
          </SliderPanelStyle>
        </Drawer>
      </>
    );
  }
}

const Navbar01Style = styled(Box)({
  "& .navbarStrip": {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    alignItems: "center",
  },
  "& .menuIcons": {
    display: "none",
    "@media (max-width:979px)": {
      display: "block",
    },
  },
  "& .navbaritem": {
    marginLeft: "1.5rem",
    fontSize: "17px",
    color: "black",
    border: "none",
  },
  "& .navbaritem:hover": {
    color: "blue",
    cursor: "pointer",
  },
  "& .navbarItems": {
    display: "flex",
    color: "black",
    "@media (max-width:979px)": {
      display: "none",
    },
  },
  "& .navbarIcon:hover": {
    transform: "scale(1.5,1.5)",
    color: "lightblue",
    cursor: "pointer",
  },
  "& .navbarIcons": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const SliderPanelStyle = styled(Box)({
  display: "flex",
  "& .navBar": {
    width: "min-content",
  },
  "& .closeIcon": {
    backgroundColor: "black",
    height: "47px",
    width: "48px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
