import { Box, styled } from "@material-ui/core";
import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <>
        <SignupStyle></SignupStyle>
      </>
    );
  }
}

const SignupStyle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  padding: "15px 0px",
  width: "98%",
  "@media (max-width:350px)": {
    padding: "0px",
  },
});
