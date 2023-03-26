import React from "react";
import { Formik, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";

import {
  Button,
  DatePickerContainer,
  Form,
  InputContainer,
  Label,
} from "./filterStyles";
import { palette, device } from "utils/styleVariables";

const validationSchema = yup.object().shape({
  from: yup.date().nullable(),
  until: yup.date().nullable(),
  status: yup.string(),
  name: yup.string(),
});

const ConnectedFilter = ({ handleFilteredList }) => {
  return (
    <Formik
      initialValues={{ name: "", status: "", from: null, until: null }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleFilteredList(values);
      }}
    >
      <Filter />
    </Formik>
  );
};

const Filter = () => {
  const { handleChange, handleSubmit, setFieldValue, values } =
    useFormikContext();
  const tablet = !useMediaQuery(device.tablet);

  return (
    <Form>
      <Label>Date Range</Label>
      <DatePickerContainer>
        <DatePicker
          name="from"
          label="From"
          onChange={(value) => setFieldValue("from", value)}
          value={values.from}
          format="DD/MM/YYYY"
        />
        <DatePicker
          name="until"
          label="Until"
          onChange={(value) => setFieldValue("until", value)}
          value={values.until}
          format="DD/MM/YYYY"
        />
      </DatePickerContainer>
      <Label>Status</Label>
      <InputContainer>
        <RadioGroup
          name="status"
          value={values.status}
          onChange={handleChange}
          row={tablet}
        >
          <FormControlLabel
            value="open"
            control={
              <Radio
                sx={{
                  color: palette.navy,
                  "&.Mui-checked": {
                    color: palette.navy,
                  },
                }}
              />
            }
            label="Open"
          />
          <FormControlLabel
            value="closed"
            control={
              <Radio
                sx={{
                  color: palette.navy,
                  "&.Mui-checked": {
                    color: palette.navy,
                  },
                }}
              />
            }
            label="Closed"
          />
          <FormControlLabel
            value=""
            control={
              <Radio
                sx={{
                  color: palette.navy,
                  "&.Mui-checked": {
                    color: palette.navy,
                  },
                }}
              />
            }
            label="All"
          />
        </RadioGroup>
      </InputContainer>
      <Label>Name</Label>
      <InputContainer>
        <TextField
          id="name"
          name="name"
          value={values.location_name}
          onChange={handleChange}
          fullWidth
        />
      </InputContainer>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default ConnectedFilter;
