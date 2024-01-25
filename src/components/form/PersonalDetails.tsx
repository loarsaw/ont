import {
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { FTextField } from "./TextField";
import { useAppDispatch, useAppSelector } from "../../redux/store/storeHook";
import { stepActions } from "../../redux/slices/step/stepSlice";
import { dataActions } from "../../redux/slices/data/dataSlice";
import { RootState } from "../../redux/store/store";
import { formActions } from "../../redux/slices/form/formSlice";

type Props = {
  setHold: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
};

interface IFormPersonalData {
  name: string;
  mobile: string;
  sex: string;
  age: string;
  id: string;
  idType: string;
}
const PersonalDetails = () => {
  const { formData } = useAppSelector((state: RootState) => state.form);
  const personalSchema = yup.object({
    name: yup.string().required(),
    age: yup.number().positive().integer().max(100).min(1).required(),
    mobile: yup
      .string()
      .required("Mobile number is required")
      .matches(
        /^[0-9]{10}$/,
        "Invalid mobile number. It should be a 10-digit number"
      ),
    sex: yup.string().required(),
    idType: yup.string().required(),
    id: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    // @ts-expect-error
    resolver: yupResolver(personalSchema),
  });
  const { index } = useAppSelector((state: RootState) => state.step);
  const dispatch = useAppDispatch();

  function submit(data: any) {
    if (getValues().idType == "Adhaar") {
      console.log("In Adhaar");
      const numericRegex = /^[2-9]\d{11}$/;
      const stringV = getValues().id ?? "";
      if (!numericRegex.test(stringV)) {
        setError("id", {
          type: "custom",
          message: "Should be 12 Digit Number",
        });
      } else {
        clearErrors("id");
        dispatch(formActions.setFormData(data));
        dispatch(stepActions.toggleIndex(1));
      }
    } else if (getValues().idType == "Pan") {
      const alphanumericRegex = /^[a-zA-Z0-9]{10}$/;
      const stringV = getValues().id ?? "";
      if (!alphanumericRegex.test(stringV)) {
        setError("id", {
          type: "custom",
          message: "Should be 10 digit alpha numeric number",
        });
      } else {
        clearErrors("id");
        dispatch(formActions.setFormData(data));
        dispatch(stepActions.toggleIndex(1));
      }
    }
  }

  return (
    <div className="">
      <p className="text-2xl mb-2">Personal Details</p>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full flex flex-col">
          <FormControl>
            <FormLabel htmlFor={"name"}>Name</FormLabel>
            <TextField {...register("name")} margin="normal" />
            {errors.name && (
              <p className="text-sm text-red-800">{errors.name.message}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"Age"}>Age</FormLabel>
            <TextField {...register("age")} margin="normal" />
            {errors.age && (
              <p className="text-sm text-red-800 ">{errors.age.message}</p>
            )}
          </FormControl>

          <FormControl>
            <FormLabel htmlFor={"Mobile"}>Mobile</FormLabel>
            <TextField {...register("mobile")} margin="normal" />
            {errors.mobile && (
              <p className="text-sm text-red-800">{errors.mobile.message}</p>
            )}
          </FormControl>
        </div>

        <div className="flex w-[30rem]">
          <FormControl fullWidth>
            <FormLabel htmlFor={"Mobile"}>Sex</FormLabel>
            <Select
              className="mt-2"
              label="Sex"
              {...register("sex")}
              defaultValue={formData.sex}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
            {errors.sex && (
              <p className="text-sm text-red-800">{errors.sex.message}</p>
            )}
          </FormControl>
        </div>
        <div className="flex w-[30rem] flex-row items-center justify-between">
          <FormControl className="w-[30%]" size="medium">
            <FormLabel htmlFor={"Mobile"}>ID Type</FormLabel>

            <Select
              className="mt-2"
              defaultValue={formData.idType}
              label="ID Type"
              {...register("idType")}
            >
              <MenuItem value="Adhaar">Adhaar</MenuItem>
              <MenuItem value="Pan">Pan</MenuItem>
            </Select>
            {errors.idType && (
              <p className="text-sm text-red-800">{errors.idType.message}</p>
            )}
          </FormControl>
          <FormControl>
            <FormLabel htmlFor={"id"}>ID</FormLabel>
            <TextField {...register("id")} margin="normal" />
            {errors.id && (
              <p className="text-sm text-red-800">{errors.id.message}</p>
            )}
          </FormControl>
        </div>
        <div className="flex flex-row justify-between ">
          <Button
            // type="submit"
            variant="contained"
            color="primary"
            disabled={index == 0}
            onClick={() => {
              // dispatch(stepActions.decrementIndex(0));
            }}
          >
            Previous
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              // dispatch(stepActions.incrementIndex(1));
            }}
          >
            {index < 1 ? "Next" : "Submit"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
