import {
  Box,
  Typography,
  styled,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  InputLabel,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";

export default class CreatePassword extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <LyncStyled>
          <Box className="left">
            <img
              src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1711545883~exp=1711549483~hmac=1df2cdf8c12fd06a2db340621930a2e07582453b7f007d85ac462cbaa255559e&w=740"
              className="lyncImg"
            />
          </Box>
          <Box className="lyncRightHeader">
            <Box className="lyncRight">
              <Typography className="lyncHeading">Linkedin</Typography>
              <InputLabel className="lyncLabel">Email*</InputLabel>
              <TextField
                className="lyncTextfield"
                placeholder="Email"
                variant="outlined"
              />
              <InputLabel className="lyncLabel">Password*</InputLabel>
              <TextField
                className="lyncTextfield"
                placeholder="Password"
                variant="outlined"
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                  height="30px"
                />
              </Box>
              <Button className="lyncButton">Login</Button>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Typography>OR</Typography>
              </Box>
              <Box className="loginWith">
                <Typography style={{ marginRight: "10px" }}>
                  Login with Linkedin
                </Typography>
                <img
                  src="https://e7.pngegg.com/pngimages/796/374/png-clipart-linkedin-linkedin-thumbnail.png"
                  height="30px"
                />
              </Box>
            </Box>
          </Box>
        </LyncStyled>
      </>
    );
  }
}

const LyncStyled = styled(Box)({
  display: "flex",
  width: "100%",
  "& .left": {
    // background: 'linear-gradient(329.1deg, #2F7735 18.67%, #1A7A63 98.9%)',
    width: "50%",
    flex: 0.5,
    height: "100vh",
    borderRadius: "0 0 200px 0",
  },
  "& .lyncImg": {
    // width: '172.25px',
    // height: '350px',
    // top: '194px',
    // left: '197px',
    // color: 'red',
    height: "100vh",
    position: "absolute",
  },
  "& .lyncHeader": {
    width: "207.14px",
    height: "50px",
    top: "56px",
    left: "200px",
    color: "white",
    position: "absolute",
    fontSize: 75,
  },
  "& .lyncRight": {
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    // width: '50%',
    // flex: '0.5px',
  },
  "& .lyncRightHeader": {
    display: "flex",
    justifyContent: "center",
    flex: "0.5px",
  },
  "& .lyncButton": {
    width: 345,
    borderRadius: "8px",
    height: "46px",
    background: "#348dfb",
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: "18px",
    textTransform: "capitalize",
    marginTop: "20px",
  },
  "& .lyncHeading": {
    fontWeight: "bold",
    fontSize: "4rem",

    lineheight: "31.2px",
  },
  "& .lyncPara": {
    fontSize: "13px",
    lineHeight: "15.6px",
    fontWeight: 400,
    marginBottom: 15,
    marginTop: 10,
  },
  "& .lyncLabel": {
    fontSize: "14px",
    lineHeight: "21px",
    fontWeight: 700,
    color: "black",
    marginTop: 10,
    textAlign: "left",
  },
  "& .lyncCheck": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "24px",
  },
  "& .lyncPassword": {
    color: "#1C71D1",
    fontSize: "13px",
    lineHeight: "12px",
    fontWeight: "700",
    float: "right",
  },
  "& .lyncTextfield": {
    background: "#F7F8F9",
  },
  "& .lyncFooter": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "10px",
    position: "absolute",
  },
  "& .lyncFooterHeading1": {
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "21px",
    alignItems: "center",
  },
  "& .lyncFooterHeading2": {
    color: "#1C71D1",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "21px",
  },
  "& .loginWith": {
    display: "flex",
    width: 345,
    justifyContent: "center",
    marginTop: "20px",
    alignItems: "center",
    backgroundColor: "#a6c9ff",
    height: "45px",
    borderRadius: "20px",
  },
});
