import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { createNewGuestForm } from "../actions/guestFormActions";

const StyledForm = styled(Form)`
  height: 44vh;
  width: 40vw;

  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 24px 0 rgba(0, 0, 0, 0.05);

  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledField = styled(Field)`
  height: 30px;
  border-radius: 16px;

  &:focus {
    outline: none;
  }
`;

const StyledFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60%;
`;

const StyledError = styled.div`
  color: red;
  font-size: 12px;
`;

const StyledSuccess = styled.div`
  color: green;
  font-size: 12px;
`;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  border-radius: 6px;
`;

const GuestFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  eventDate: Yup.date().required("Required")
});

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      selected={(value && new Date(value)) || null}
      onChange={val => {
        onChange(name, val);
      }}
    />
  );
};

function GuestForm(props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (props.newGuestFormInfo.success) {
      setSuccessMessage("Formularz został wysłany.");
    } else if (
      !props.newGuestFormInfo.success &&
      props.newGuestFormInfo.error
    ) {
      setErrorMessage(props.newGuestFormInfo.error);
    }
  }, [props.newGuestFormInfo]);

  useEffect(() => {
    setSuccessMessage("");
  }, [errorMessage]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        eventDate: ""
      }}
      validationSchema={GuestFormSchema}
      onSubmit={values => {
        try {
          const postData = Object.assign(values, {
            eventDate: values.eventDate.toISOString().split("T")[0]
          });
          props.createNewGuestForm(postData);
          setErrorMessage("");
        } catch {
          setErrorMessage("Wybierz datę ponownie.");
        }
      }}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <StyledForm>
          <StyledFieldContainer>
            <label htmlFor="firstName">Imię</label>
            {errors.firstName && touched.firstName ? (
              <StyledError>{errors.firstName}</StyledError>
            ) : null}
            <StyledField name="firstName" />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <label htmlFor="lastName">Nazwisko</label>
            {errors.lastName && touched.lastName ? (
              <StyledError>{errors.lastName}</StyledError>
            ) : null}
            <StyledField name="lastName" />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <label htmlFor="email">Email</label>
            {errors.email && touched.email ? (
              <StyledError>{errors.email}</StyledError>
            ) : null}
            <StyledField name="email" type="email" />
          </StyledFieldContainer>

          <StyledFieldContainer>
            <label htmlFor="eventDate">Data eventu</label>
            {errors.eventDate && touched.eventDate ? (
              <StyledError>{errors.eventDate}</StyledError>
            ) : null}
            <DatePickerField
              name="eventDate"
              value={values.eventDate}
              onChange={setFieldValue}
            />
          </StyledFieldContainer>

          <StyledButton type="submit">Wyślij</StyledButton>

          <StyledSuccess>{successMessage}</StyledSuccess>
          <StyledError>{errorMessage}</StyledError>
        </StyledForm>
      )}
    </Formik>
  );
}

GuestForm.propTypes = {
  createNewGuestForm: PropTypes.func.isRequired,
  newGuestFormInfo: PropTypes.object
};

const mapStateToProps = state => ({
  newGuestFormInfo: state.guestForm.newGuestFormInfo
});

export default connect(
  mapStateToProps,
  { createNewGuestForm }
)(GuestForm);
