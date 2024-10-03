import {
    Button,
    FormControl,
    FormHelperText,
    TextField,
    Typography,
    Stack,
  } from "@mui/material";
  import { Formik } from "formik";
  import React from "react";
  import * as Yup from "yup";
  import {Link} from "react-router-dom";
  
  const Login = () => {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Must be a valid email.")
              .lowercase()
              .max(55, "Email must be at max 55 characters.")
              .required("Email is required.")
              .trim(),
            password: Yup.string().trim().required("Password is required."),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor:"lightblue",
                gap: "2rem",
                padding: "1rem",
                minWidth: "400px",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <Typography variant="h5">Log in</Typography>
  
              <FormControl fullWidth>
                <TextField label="Email" {...formik.getFieldProps("email")} />
  
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>
  
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />
  
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>{formik.errors.password}</FormHelperText>
                ) : null}
              </FormControl>
  
              <Stack sx={{ width: "100%", gap: "10px", alignItems: "center" }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="success"
              >
                login
              </Button>

              <Link to="/register">New user? Register</Link>
            </Stack>
            
            </form>
          )}
        </Formik>
      </>
    );
  };
  
  export default Login;