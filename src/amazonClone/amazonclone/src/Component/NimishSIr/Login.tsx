import {
  Box,
  Button,
  InputLabel,
  styled,
  OutlinedInput,
  Typography,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@material-ui/core";
import React, { Component } from "react";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
interface State {
  username: string;
  password: string;
}

interface Props {}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const a = event.target.value;
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username:", this.state.username);
    console.log("Password:", this.state.password);
  };

  render() {
    return (
      <>
        <LoginStyle>
          <Paper className="loginBox">
            <Box>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                height="70px"
              />
            </Box>
            <Box className="formContainer">
              <form onSubmit={this.handleSubmit} className="formContainer">
                <Box style={{ width: "70%" }}>
                  <InputLabel
                    className="inputLabel"
                    style={{ margin: "0px 0px", textAlign: "left" }}
                  >
                    <PersonIcon style={{ marginRight: "10px" }} />
                    Username
                  </InputLabel>
                  <OutlinedInput
                    onChange={this.handleChange}
                    style={{ marginBottom: "25px", color: "black" }}
                    fullWidth
                    value={this.state.username}
                    placeholder="Email"
                    required
                  />
                </Box>
                <Box style={{ width: "70%" }}>
                  <InputLabel
                    className="inputLabel"
                    style={{ margin: "0px 0px" }}
                  >
                    <EmailIcon style={{ marginRight: "10px" }} /> Email
                  </InputLabel>
                  <OutlinedInput
                    type="password"
                    onChange={this.handleChange}
                    style={{
                      marginBottom: "12px",
                      borderRadius: "25px",
                      backgroundColor: "#e4e4e4",
                    }}
                    placeholder="Password"
                    value={this.state.password}
                    fullWidth
                    required
                  />
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "25px", width: "25%" }}
                >
                  Login
                </Button>
              </form>
              <Box>
                <Typography>Login with</Typography>
              </Box>
            </Box>
          </Paper>
        </LoginStyle>
      </>
    );
  }
}

const LoginStyle = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  height: "95vh",
  backgroundColor: "lightblue",
  "& .loginBox": {
    height: "min-content",
    width: "60vw",
    padding: "25px",
    boxShadow: "1px -1px 5px 4px rgba(0,0,0,0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "20px",
  },
  "& .formContainer": {
    margin: "30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "60vw",
  },
  "& .inputLabel": {
    display: "flex",
    alignItems: "center",
  },
});
