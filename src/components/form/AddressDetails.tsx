import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import * as yup from "yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";
import { stepActions } from "../../redux/slices/step/stepSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { formActions, initialState } from "../../redux/slices/form/formSlice";
import { dataActions } from "../../redux/slices/data/dataSlice";

type Props = {
  setHold: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddressDetails = ({ setHold }: Props) => {
  const { formData } = useAppSelector((state: RootState) => state.form);
  const { index } = useAppSelector((state: RootState) => state.step);
  const { dataArray } = useAppSelector((state: RootState) => state.data);

  const addressSchema = yup.object({
    address: yup.string(),
    city: yup.string(),
    pincode: yup.string(),
    street: yup.string(),
    country: yup.string().required(),
  });
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(addressSchema),
  });

  function submit(data: any) {
    const newData = [...dataArray, formData];
    console.log(newData);
    dispatch(dataActions.setData(newData));
    dispatch(stepActions.incrementIndex(0));
    dispatch(formActions.setFormData(initialState));
  }

  return (
    <form className="w-[30rem]" onSubmit={handleSubmit(submit)}>
      <p className="text-2xl">Address Details</p>
      <div className="flex w-full flex-col">
        <FormControl>
          <FormLabel htmlFor={"name"}>Address</FormLabel>
          <TextField
            {...register("address", { required: "Address is Required" })}
            margin="normal"
          />
          {errors.address && (
            <p className="text-sm">{errors.address.message}</p>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"street"}>Street</FormLabel>
          <TextField {...register("street")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"city"}>City</FormLabel>
          <TextField {...register("city")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"pincode"}>Pincode</FormLabel>
          <TextField {...register("pincode")} margin="normal" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"country"}>Country</FormLabel>
          <TextField {...register("country")} margin="normal" />
        </FormControl>
      </div>
      <div className="flex flex-row justify-between">
        <Button
          variant="contained"
          color="primary"
          disabled={index == 0}
          onClick={() => {
            dispatch(stepActions.decrementIndex(0));
          }}
        >
          Previous
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {}}
        >
          {index < 1 ? "Next" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddressDetails;
