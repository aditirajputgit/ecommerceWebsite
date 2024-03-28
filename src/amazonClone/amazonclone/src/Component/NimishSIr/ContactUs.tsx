import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  styled,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { Component } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ContactUsController from "./ContactUsController";

export default class ContactUs extends ContactUsController {
  countries = [
    { code: "+1", label: "USA" },
    { code: "+44", label: "UK" },
    { code: "+91", label: "India" },
  ];

  render() {
    return (
      <>
        <ContactStyle>
          <Box className="contactHeader">
            <Button
              variant="outlined"
              className="backButton"
              startIcon={<ArrowBackIcon className="" />}
            >
              Back
            </Button>
            <Typography className="contactusHeading">Contact us</Typography>
          </Box>
          <Paper className="ContactUs">
            <Grid container spacing={3}>
              <Grid xs={12} sm={12} md={6} lg={6} item>
                <Box className="contactUsDetail">
                  <Typography className="contactusHeadings">
                    Contact us
                  </Typography>
                  <Typography className="contactusDet">
                    We would love tohear from you! Whether you have a questions,
                    a suggestion, or just ant to say helloour team is always
                    ready to assist you.
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={12} sm={12} md={6} lg={6} item>
                <Box className="contactUsFillDetail">
                  <form style={{ width: "100%" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box className="emailInput">
                          <InputLabel className="fullNameLabel">
                            Full Name
                          </InputLabel>
                          {/* <StyledTextField> */}
                          <TextField
                            fullWidth
                            className="ContactUstextField"
                            placeholder="Ms. Hina"
                            variant="outlined"
                          />
                          {/* </StyledTextField> */}
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className="emailInputs">
                          <InputLabel className="fullNameLabel">
                            Email Address
                          </InputLabel>
                          {/* <StyledTextField> */}
                          <TextField
                            fullWidth
                            className="ContactUstextField "
                            placeholder="abc@email.com"
                            variant="outlined"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Box className="emailInputs">
                          <InputLabel className="fullNameLabel">
                            Phone Number
                          </InputLabel>
                          <TextField
                            className="ContactUstextField"
                            variant="outlined"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Select
                                    className="selectCountryCode"
                                    variant="outlined"
                                    value={this.state.countryCode}
                                    onChange={(event: any) => {
                                      this.setState({
                                        countryCode: event.target.value,
                                      });
                                    }}
                                  >
                                    <MenuItem>dsasdfasdf</MenuItem>
                                    {this.state.countryListData.map(
                                      (item, index) => {
                                        return (
                                          <MenuItem key={index}>
                                            {item.country_flag}{" "}
                                            {item.country_code}
                                          </MenuItem>
                                        );
                                      }
                                    )}
                                  </Select>
                                </InputAdornment>
                              ),
                            }}
                            placeholder="+97 999999000"
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box className="emailInput">
                          <InputLabel className="fullNameLabel">
                            Full Name
                          </InputLabel>
                          {/* <StyledTextField> */}
                          <TextField
                            fullWidth
                            className="ContactUstextField"
                            placeholder="Ms. Hina"
                            variant="outlined"
                          />
                          {/* </StyledTextField> */}
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </ContactStyle>
      </>
    );
  }
}

const StyledTextField = styled(FormControl)({
  "& .MuiInput-underline::before": {
    border: "none",
  },
  "& .MuiInput-underline::before:hover": {
    border: "none",
  },
});

const ContactStyle = styled(Box)({
  backgroundColor: "#F5F5F5",
  height: "100vh",
  padding: "18px 25px",
  "& .contactHeader": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  "& .backButton": {
    borderRadius: "20px",
    color: "#24E09C",
    borderColor: "#24E09C",
    backgroundColor: "white",
    padding: "6px 20px",
    borderWidth: "2px",
    width: "130px",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  "& .contactusHeading": {
    color: "#390689",
    fontSize: "23px",
    fontWeight: "500",
    marginLeft: "27px",
  },
  "& .ContactUs": {
    width: "100%",
    height: "min-content",
    color: "white",
    margin: "25px 2px",
    borderRadius: "28px",
  },
  "& .contactUsDetail": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "500px",
    flexDirection: "column",
    margin: "0px 0px 0px 25px",
  },
  "& .contactusHeadings": {
    color: "#390689",
    fontSize: "26px",
    textTransform: "uppercase",
    fontWeight: 600,
    lineHeight: "28.8px",
    marginBottom: "15px",
  },
  "& .contactusDet": {
    color: "#390689",
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "30px",
  },
  "& .contactUsFillDetail": {
    margin: "10px 40px 10px 20px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "500px",
  },
  "& .emailInput": {
    width: "100%",
  },
  "& .emailInputs": {
    width: "100%",
  },
  "& .fullNameLabel": {
    color: "#390689",
    marginBottom: "8px",
  },
  "& .selectCountryCode": {
    width: "100px",
    "& .MuiSelect-select.MuiSelect-select ": {
      paddingRight: "8px",
    },
    border: "none",
  },
  "& .ContactUstextField": {
    padding: "0px",
    borderRadius: "18px",
    border: "none",
    backgroundColor: "#F5F5F5",
    color: "#94A3B8",
    "& .MuiOutlinedInput-input": {
      padding: "16.5px 14px",
    },
    "& .MuiTextField-root": {
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
    // borderRadius: "15px",
  },
});
