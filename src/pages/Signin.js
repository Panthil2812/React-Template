import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import SnackbarContent from "@mui/material/SnackbarContent";
import Alert from "@mui/material/Alert";
import App from "../App";
import Router from "../Router";
import { Redirect } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#33691e" align="center" {...props}>
      {"Copyright © "}
      <Link color="#33691e" href="/">
        Agventure
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const theme = createTheme();
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderWidth: "2px",
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&:hover fieldset": {
      borderWidth: "2px",
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderWidth: "2px",
      borderColor: "green",
    },
  },
});
export default function SignInSide() {
  const [state, setState] = React.useState({
    open: false,
    isLogged: false,
  });

  const { isLogged, open } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const info = {
      email: data.get("email").toString(),
      password: data.get("password").toString(),
    };
    if (
      info.email === "pmalaviya356@rku.ac.in" &&
      info.password === "1234567890"
    ) {
      setState({
        isLogged: true,
        open: true,
      });

      // console.log(state);
    } else {
      setState({
        isLogged: false,
        open: true,
      });
      // console.log(state);
    }
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleClick = () => {
    // errorfunction();
  };
  const buttons = (
    <React.Fragment>
      <Button
        type="submit"
        fullWidth
        href={isLogged && "/"}
        variant="contained"
        color="success"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </React.Fragment>
  );
  // const errorfunction = () => {
  //   if (isLogged) {
  //     return (
  //       <div>
  //         <Snackbar
  //           open={open}
  //           sx={{ width: "50%" }}
  //           anchorOrigin={{ vertical: "top", horizontal: "center" }}
  //           autoHideDuration={3000}
  //           onClose={handleClose}
  //         >
  //           <Alert
  //             onClose={handleClose}
  //             severity="success"
  //             sx={{ width: "100%" }}
  //           >
  //             Login Success! Redirecting....
  //           </Alert>
  //         </Snackbar>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <Snackbar
  //           open={open}
  //           sx={{ width: "50%" }}
  //           anchorOrigin={{ vertical: "top", horizontal: "center" }}
  //           autoHideDuration={3000}
  //           onClose={handleClose}
  //         >
  //           <Alert
  //             onClose={handleClose}
  //             severity="success"
  //             sx={{ width: "100%" }}
  //           >
  //             Invalid Username/email and password
  //           </Alert>
  //         </Snackbar>
  //       </div>
  //     );
  //   }
  // };
  return (
    <>
      {/* <div>{errorfunction()}</div> */}
      <ThemeProvider theme={theme}>
        <Grid
          container
          component="main"
          sx={{ height: "100vh", color: "green" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#33691e" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                component="h1"
                variant="h5"
                sx={{ color: "#33691e", fontWeight: "bold" }}
              >
                Sign in
              </Typography>

              <div>
                {!isLogged && (
                  <Alert variant="filled" severity="error">
                    Invalid Username/email and password
                  </Alert>
                )}
              </div>

              <Box
                component="form"
                noValidate
                onChangeCapture={handleSubmit}
                sx={{ mt: 1 }}
              >
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <CssTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  sx={{ color: "#33691e" }}
                  control={<Checkbox value="remember" color="success" />}
                  label="Remember me"
                />

                <Button
                  type="reset"
                  // onClick={errorfunction}
                  fullWidth
                  href={isLogged && "/"}
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      sx={{ color: "#33691e", fontWeight: "bold" }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/signup"
                      variant="body2"
                      sx={{ color: "#33691e", fontWeight: "bold" }}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5, fontWeight: "bold" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}
/* <Snackbar
                  open={open}
                  sx={{ width: "50%" }}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                  >
                    This is a success message!
                  </Alert>
                </Snackbar> */
