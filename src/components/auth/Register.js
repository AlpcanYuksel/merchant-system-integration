import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import HowToRegOutlinedIcon from "@material-ui/icons/HowToRegOutlined";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  //Function
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    phoneNumber:Yup.number().typeError("Enter valid Phone Number ").required("Required"),
    password: Yup.string().min(8,"Password minimum lenght should be 8").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not mached").required("Required"),


  });

  //CSS
  const paperStyle = { padding: 20, width: 380, margin: "0px auto" };
  const headerStyle = { margin: 20 };
  const avatarStyle = { backgroundColor: "#1877f2" };
  const btnstyle = { margin: "12px 0", padding: 10 };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <HowToRegOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                name="name"
                label="Name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />
              <FormControl component="fieldset" style={{ marginTop: "12px" }}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field
                  as={RadioGroup}
                  aria-label="gender"
                  name="gender"
                  style={{ display: "initial" }}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio color="607d8b" />}
                    label="Other"
                  />
                </Field>
              </FormControl>
              <Field
                as={TextField}
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="passoword"
                label="Password"
                placeholder="Enter your password"
                type="password"
                helperText={<ErrorMessage name="passoword" />}
              />
              <Field
                as={TextField}
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Enter your confirm password"
                type="password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />

              <FormControlLabel
                control={
                  <Field
                    as={Checkbox}
                    name="termsAndConditions"
                    color="primary"
                  />
                }
                label="I accept the terms and conditions"
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Register;
