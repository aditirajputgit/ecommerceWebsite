import React, { Component } from "react";
import { CollectionOfData } from "../../Data/collection";
import { Box, styled, Typography } from "@material-ui/core";
import ImageCart from "../Sections/ImageCart";

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
interface States {
  shoppingData: Array<CollectionSingleData>;
}
type Props = {};
export default class WomenCollectionPage extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shoppingData: [],
    };
  }
  componentDidMount(): void {
    this.setState({ shoppingData: CollectionOfData });
  }
  handleCategory = (key: string) => {
    let newShoppingData = this.state.shoppingData.filter((item: any) => {
      return item.gender === key;
    });
    this.setState({ shoppingData: newShoppingData });
  };
  render() {
    return (
      <>
        <WomenCollection>
          <Box className="womenBanner">
            {this.state.shoppingData.map((item: any) => {
              if (item.category === "women's clothing") {
                return <>{/* <ImageCart items={item} /> */}</>;
              }
            })}
            <Typography variant="h3"> Women</Typography>
          </Box>
        </WomenCollection>
      </>
    );
  }
}

const WomenCollection = styled(Box)({
  "& .womenBanner": {
    height: "250px",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundImage:
      "url('https://img.freepik.com/free-photo/young-business-woman-business-suit-with-laptop-street_1303-24919.jpg?t=st=1711458780~exp=1711462380~hmac=74104744fd551c3c15a9a75508ef17720a2e9dea3c8e2d44ebc499e87c33f5a4&w=740')",
  },
});
