import {
  Box,
  FormControl,
  InputLabel,
  styled,
  Typography,
  Select,
  OutlinedInput,
} from "@material-ui/core";
import React, { Component } from "react";
import amazonlogo from "../../Assets/download.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import { Height } from "@material-ui/icons";

interface selectHandle {
  name: string;
  age: string | number;
}

interface S {
  selectState: selectHandle;
}
interface Props {}
export default class Navbar extends Component<Props, S> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectState: { name: "hai", age: "" },
    };
  }
  handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof this.state.selectState;
    this.setState({
      ...this.state,
      selectState: {
        ...this.state.selectState,
        [name]: event.target.value,
      },
    });
  };
  render() {
    return (
      <>
        <AmazonStyle>
          <Box className="amazonSty">
            <Box>
              <img src={amazonlogo} className="imgSrc" alt="Amazon Logo" />
              <Box className="deliverNav">
                <LocationOnIcon />
                <Box style={{ marginRight: "8px" }}>
                  {" "}
                  <Typography style={{ fontSize: "12px", color: "grey" }}>
                    Deliver to
                  </Typography>
                  <Typography>India</Typography>
                </Box>
              </Box>
              <Box className="navbarSearch">
                <Select
                  variant="outlined"
                  style={{
                    height: "auto",
                    background: "white",
                    color: "black",
                    backgroundColor: "#e6e6e6",
                  }}
                  placeholder="All"
                  inputProps={{ "aria-label": "Select age" }}
                />{" "}
                <OutlinedInput
                  className="navbarSearchs"
                  placeholder="Search Amazon"
                  fullWidth
                ></OutlinedInput>
                <Box className="searchIcon">
                  <SearchIcon />
                </Box>
              </Box>
              <Box>
                <Typography>Returns</Typography>
                <Typography>& Orders</Typography>
              </Box>
            </Box>
          </Box>
        </AmazonStyle>
      </>
    );
  }
}

const AmazonStyle = styled(Box)({
  color: "white",
  "& .amazonSty": {
    backgroundColor: "black",
    width: "98vw",
    color: "white",
    padding: "7px",
    display: "flex",
    alignItems: "center",
  },
  "& .imgSrc": {
    width: "5.5rem",
    height: "40px",
  },
  "& .deliverNav": {
    display: "flex",
    alignItems: "flex-end",
  },
  "& .navbarSearch": {
    width: "600px",
    backgroundcolor: "white",
    border: "1px solid white",
    display: "flex",
    borderRadius: "8px ",
    height: "40px",
  },
  "& .navbarSearchs": {
    backgroundColor: "white",
  },
  "& .searchIcon": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    background: "#febd69",
    borderRadius: "0px 10px 10px 0px",
  },
});
