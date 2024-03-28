import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  OutlinedInput,
  styled,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import amazonLogo from "../../Assets/download.png";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CopyrightIcon from "@material-ui/icons/Copyright";
export default class Login extends Component {
  render() {
    return (
      <>
        <LoginStyled>
          <Box className="amazonContainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_PNG6.png"
              className="amazonLoginImg"
            />
            <Box className="amazonSignIn">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                Sign in
              </Typography>
              <InputLabel className="inputLabelEmail">
                Email or mobile phone number
              </InputLabel>
              <OutlinedInput fullWidth className="inputfieldLogin" />
              <Button variant="contained" fullWidth className="buttonLogin">
                Continue
              </Button>
              <Typography className="loginPrivacy">
                By continuing, you agree to Amazon's
                <span style={{ color: "#0066c0", fontWeight: "500" }}>
                  {" "}
                  Conditions of Use
                </span>{" "}
                and{" "}
                <span style={{ color: "#0066c0", fontWeight: "500" }}>
                  {" "}
                  Privacy Notice.
                </span>
              </Typography>
              <Box
                className="needHelpLogin"
                style={{
                  width: "100%",
                  borderBottom: "1px solid #e7e7e7",
                }}
              >
                <ArrowRightIcon style={{ color: "grey", height: "18px" }} />
                <span style={{ color: "#0066c0", fontSize: "12px" }}>
                  Need help?
                </span>
              </Box>

              <Typography className="buyingLogin" style={{ fontSize: "12px" }}>
                Buying for work?
              </Typography>
              <Typography
                style={{
                  color: "#0066c0",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Shop on Amazon Business
              </Typography>
            </Box>
            <Box className="newToAmazon">
              <Box
                style={{ borderBottom: "1px solid #e7e7e7", width: "35%" }}
              ></Box>
              <Typography
                style={{
                  fontSize: "11px",
                  color: "#767676",
                  padding: "4px 0px",
                  fontWeight: "bold",
                }}
              >
                New to Amazon?
              </Typography>

              <Box
                style={{ borderBottom: "1px solid #e7e7e7", width: "35%" }}
              ></Box>
            </Box>
            <Button
              fullWidth
              variant="outlined"
              className="buttonFoeCreateAccount"
            >
              Create your Amazon account
            </Button>
          </Box>
          <Box className="footerBox">
            <Box className="condition">
              <Typography style={{ fontSize: "12px", fontWeight: "500" }}>
                Conditions of Use
              </Typography>
              <Typography style={{ fontSize: "12px", fontWeight: "500" }}>
                Privacy Notice
              </Typography>
              <Typography style={{ fontSize: "12px", fontWeight: "500" }}>
                Help
              </Typography>
            </Box>
            <Box className="conditions">
              <CopyrightIcon style={{ height: "14px" }} />
              <Typography style={{ fontSize: "12px", fontWeight: "500" }}>
                1996-2024, Amazon.com, Inc. or its affiliates
              </Typography>
            </Box>
          </Box>
        </LoginStyled>
      </>
    );
  }
}

const LoginStyled = styled(Box)({
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
  "& .amazonContainer": {
    width: "290px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:350px)": {
      width: "180px",
    },
  },

  "& .amazonSignIn": {
    border: "1px solid #e6e6e6",
    borderRadius: "10px",
    padding: "22px 30px",
    display: "flex",
    width: "100%",
    fontFamily: "Amazon Ember, Arial, sans-serif",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  "& .amazonLoginImg": {
    height: "32px",
    width: "100px",
    marginBottom: "14.5px",
  },
  "& .inputLabelEmail": {
    fontWeight: "bold",
    margin: "15px 0px 5px 0px",
    color: "black",
    fontSize: "13px",
  },
  "& .inputfieldLogin": {
    height: "33px",
    color: "black",
    borderColor: "black",
  },
  "& .buttonLogin": {
    margin: "15px 0px 15px 0px",
    backgroundColor: "#ffd814",
    color: "black",
    borderRadius: "8px",
    height: "30px",
    boxShadow: "none",
    fontSize: "13px",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  "& .loginPrivacy": {
    fontSize: "11.5px",
    textAlign: "left",
    fontWeight: "500",
  },
  "& .needHelpLogin": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "20px 0px",
    marginRight: "30px",
  },
  "& .buyingLogin": {
    margin: "20px 0px 6px 0px",
    fontSize: "10px",
    fontWeight: "bold",
  },
  "& .newToAmazon": {
    display: "flex",
    padding: "20px 0px 8px 0px",
    width: "119%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .buttonFoeCreateAccount": {
    padding: "5px 25px",
    boxShadow: "3px 3px 23px -15px rgba(56,54,56,1)",
    width: "119%",
    textTransform: "capitalize",
    fontWeight: "700",
    fontSize: "12px",
    borderRadius: "8px",
  },
  "& .footerBox": {
    backgroundColor: "smokewhite",
    width: "100%",
    marginTop: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    flexDirection: "column",
    borderTop: "1px solid #eaeaea",
    boxShadow: "-1px -4px 6px -6px rgba(56,54,56,1)",
  },
  "& .condition": {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    color: "#0066c0",
    fontSize: "13px",
    width: "250px",
  },
  "& .conditions": {
    display: "flex",
    marginTop: "15px",
    justifyContent: "center",
    alignItems: "center",
  },
});
