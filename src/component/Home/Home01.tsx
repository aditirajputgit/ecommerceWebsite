import { Box, Button, Grid, Typography, styled } from '@material-ui/core'
import React, { Component } from 'react'
import Slider from "react-slick"
import ImageCart from '../Sections/ImageCart';
import TredingArrayData from '../../Data/treding';

interface SingleTrendingData{
  name:string,
  price:number,
  description:string,
  sizes:Array<string>,
  availability:boolean,
  categories:Array<string>,
  tags:Array<string>,
  imgSrc:string,
  id:number
}

interface S{
  trendingData: Array<SingleTrendingData>
}

interface Props{}

export default class Home01 extends Component<Props,S>{
  constructor(props:Props){
    super(props)
    this.state = {
      trendingData : TredingArrayData,
    };
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
    autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <HomeSlider>
          <Box className="HomeSlider">
            <Slider {...settings}>
              <Grid container>
                <Grid item lg={12}>
                  <Box className="singleSlider">
                    <Box style={{ marginLeft: "30px" }}>
                      <Typography variant="h6">SUMMER 2023</Typography>
                      <Typography variant="h3">
                        New Arrival Collection
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        Explore Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={12}>
                  <Box
                    style={{
                      backgroundImage:
                        "url('https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slide2.jpg?v=1682405064&width=3800')",
                    }}
                    className="singleSlider"
                  >
                    <Box style={{ marginLeft: "30px" }}>
                      <Typography variant="h6">SUMMER 2023</Typography>
                      <Typography variant="h3">
                        New Arrival Collection
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        Explore Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={12}>
                  <Box className="singleSlider">
                    <Box style={{ marginLeft: "30px" }}>
                      <Typography variant="h6">SUMMER 2023</Typography>
                      <Typography variant="h3">
                        New Arrival Collection
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: "20px" }}
                      >
                        Explore Now
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Slider>
          </Box>
        </HomeSlider>
        <HomeMoreClothes>
          <Box style={{ height: "min-content" }}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box className="boxWomenClothe hoverEffect">
                  <img
                    src="https://img.freepik.com/free-photo/young-woman-with-shopping-bags-beautiful-dress-hat_1303-17524.jpg?t=st=1711365785~exp=1711369385~hmac=d8f27f839a85f83786463ab7f3a34ace67b427e94b8d49c76db5e347f72ffe84&w=900"
                    className="homemoreClothesWomen"
                  />
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box
                  className="boxWomenClothe"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Box>
                    <img
                      src="https://img.freepik.com/free-photo/still-life-hanging-bag_23-2151008991.jpg?t=st=1711366690~exp=1711370290~hmac=5623fd6dc9481878bfe378949a0b56513cd5dd8a2ff55287a2e0bd477ff07807&w=360"
                      className="homemoreClothesBag hoverEffect"
                    />
                    <img
                      src="https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?t=st=1711366912~exp=1711370512~hmac=70a9f2453b17f61aa6e334cbf1985065bba3afd24354284ccc0ac58b1fa547ee&w=360"
                      className="homemoreClothesShoes hoverEffect"
                    />
                  </Box>
                  <Box></Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={3}>
                <Box className="boxWomenClothe hoverEffect">
                  <img
                    src="https://img.freepik.com/premium-photo/man-watch-mockup-without-brand-flat-photography_727082-1.jpg?w=360"
                    className="homemoreClothesWatch"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </HomeMoreClothes>
        <Box>
          {this.state.trendingData[1].imgSrc}
        </Box>
        <TrendingSection>
          <Box className="trendingHeading">
            <Typography variant="h3">Trending</Typography>
            <Typography style={{ color: "grey" }}>
              Top view in this week
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {this.state.trendingData.map((item) => {
              return (
                <>
                  <Grid item xs={6} sm={6} md={4} lg={3}>
                    <ImageCart item={item} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </TrendingSection>
      </>
    );
  }
}

const HomeSlider = styled(Box)({
  "& .HomeSlider": {
    backgroundColor: "pink",
  },
  "& .singleSlider": {
    height:"30rem",
    padding:"20px",
    backgroundSize:"cover",
    display:"flex",
    alignItems:"center",
    "@media (max-width:700px)":{
        height:"20rem",
        width:"100%"
    },
    backgroundImage:
      "url('https://demo-kalles-4-1.myshopify.com/cdn/shop/files/slider-01.jpg?v=1652056793&width=2000')",
  },
});

const HomeMoreClothes = styled(Box)({
  marginTop: "25px",
  padding: "15px",
  marginBottom:"50px",
  "& .boxWomenClothe": {
    height: "450px",
  },
  "& .homemoreClothesWomen": {
    width: "100%",
    height: "100%",
  },
  "& .homemoreClothesWatch": {
    height: "100%",
    width: "100%",
  },
//   "& .homemoreClothesWatch:hover": {
//     cursor: "pointer",
//     transform: "scale(.9)",
//   },
  "& .homemoreClothesShoes": {
    height: "212px",
    width: "100%",
    marginTop: "20px",
  },
  "& .homemoreClothesBag": {
    width: "100%",
    height: "212px",
  },
  "& .hoverEffect:hover": {
    cursor: "pointer",
    transform: "scale(.9)",
  },
});

const TrendingSection = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding:"10px",
  "& .trendingHeading": {
    margin: "30px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});