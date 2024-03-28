import React, { Component } from "react";
import { Box, Button, Grid, styled, Typography } from "@material-ui/core";
import { CollectionOfSingle } from "../../Data/collection";
import { Link, useParams } from "react-router-dom";

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

interface singleItem {
  id: number;
  imgsrc: string;
  Category: string;
  buttonName: string;
}

export default class FirstCollectionPage extends Component<{}, {}> {
  onHandlingSingleCart = (items: singleItem) => {
    const { Category, buttonName } = items;
    const { category } = useParams<{ category: string }>();

    return (
      <>
        <SingleCartCollection>
          <Box className="singleCarts">
            <Box
              className="imgCollection"
              style={{
                backgroundImage: `url(${items.imgsrc})`,
                height: "100%",
              }}
            >
              <Link to={`/collection/${Category}`}>
                <Button
                  className="buttonCart"
                  variant="contained"
                  onClick={() => console.log(category)}
                >
                  {buttonName}
                </Button>
              </Link>
            </Box>
          </Box>
        </SingleCartCollection>
      </>
    );
  };

  render() {
    return (
      <>
        <FirstCollection>
          <Box className="collectionBanner">
            <Typography variant="h3">Collection</Typography>
          </Box>
          <Box className="collectionOfItem">
            <Grid container spacing={4}>
              {CollectionOfSingle.map((items) => {
                return (
                  <Grid item xs={6} sm={6} md={4} lg={4} key={items.id}>
                    {this.onHandlingSingleCart(items)}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </FirstCollection>
      </>
    );
  }
}

const FirstCollection = styled(Box)({
  "& .collectionBanner": {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/top-front-view-beauty-products-showcasing-mockups-ai-generated_999919-410.jpg?w=826')",
    display: "flex",
    justifyContent: "center",
    height: "150px",
    alignItems: "center",
    backgroundSize: "cover",
    color: "white",
  },
  "& .collectionOfItem": {
    padding: "3rem",
    border: "1px solid black",
    color: "black",
  },
});

const SingleCartCollection = styled(Box)({
  "& .singleCarts": {
    backgroundColor: "pink",
    height: "30rem",
  },
  "& .imgCollection": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  "& .imgCollection:hover": {
    transition: "transform 2s",
    transform: "scale(1.04)",
  },
  "& .buttonCart": {
    marginBottom: "10px",
    backgroundColor: "white",
    padding: "10px 15px",
  },
  "& .buttonCart:hover": {
    backgroundColor: "black",
    color: "white",
  },
});
