import { Box, Button, Typography, styled } from "@material-ui/core";
import React, { Component } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

interface RatingType {
  rate: number;
  count: number;
}

interface CollectionSingleData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingType;
}

interface S {
  isHovered: boolean;
}

interface Props {
  item: CollectionSingleData;
}

class ImageCart extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  onClickQuickShop = () => {
    console.log("added");
  };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;
    return (
      <SingleImageCart
        item={this.props.item} // Pass the item prop here
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Box
          className={isHovered ? "box hovered" : "box"}
          style={{ backgroundImage: `url('${this.props.item.image}')` }}
        >
          {isHovered && (
            <HoverText>
              <Box
                style={{
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <FavoriteBorderIcon className="hoverWishlist" />
              </Box>
              <Box className="addingButton">
                <Button variant="contained" className="hoverButton">
                  Quick View
                </Button>
                <br />
                <Button
                  variant="contained"
                  className="hoverButton"
                  onClick={() => {
                    this.onClickQuickShop();
                  }}
                >
                  Quick Shop
                </Button>
              </Box>
            </HoverText>
          )}
        </Box>
        <Box>
          <Typography>{this.props.item.title}</Typography>
          <Typography>Rs.{this.props.item.price}</Typography>
        </Box>
      </SingleImageCart>
    );
  }
}

const SingleImageCart = styled(Box)({
  height: "400px",
  backgroundColor: "pink",
  padding: "10px",
  cursor: "pointer",
  "& .box": {
    width: "100%",
    height: "90%",
    cursor: "pointer",
    color: "white",
    backgroundImage: (props: Props) => `url('${props.item.image}')`,
  },
  "& .box:hover": {
    transform: "scale(.9)",
  },
  "& .hovered": {
    transform: "scale(.9)",
    backgroundColor: "lightblue",
  },
});

const HoverText = styled(Box)({
  display: "flex",
  "& .addingButton": {
    color: "white",
    display: "flex",
    margin: "130px 50px 50px 50px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  "& .hoverButton": {
    borderRadius: "15px",
    padding: "10px",
    width: "150px",
  },
  "& .hoverButton:hover": {
    backgroundColor: "black",
    transform: "scale(1.08)",
    color: "white",
  },
  "& .hoverWishlist": {
    marginLeft: "10px",
    marginTop: "15px",
    color: "brown",
  },
  "& .hoverWishlist:hover": {
    transform: "scale(1.05)",
    marginLeft: "10px",
    color: "black",
  },
});

export default ImageCart;
