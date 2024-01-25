import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";
import { stepActions } from "../../redux/slices/step/stepSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { dataActions } from "../../redux/slices/data/dataSlice";
import { formActions, initialState } from "../../redux/slices/form/formSlice";

const AddressDetails = () => {
  const { formData } = useAppSelector((state: RootState) => state.form);
  const { index } = useAppSelector((state: RootState) => state.step);
  const { dataArray } = useAppSelector((state: RootState) => state.data);
  const [countries, setCountries] = useState([]);
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
    formState: { errors },
  } = useForm({
    defaultValues: formData,
    resolver: yupResolver(addressSchema),
  });

  function submit(data: any) {
    const newData = [...dataArray, data];
    dispatch(dataActions.setData(newData));
    dispatch(stepActions.toggleIndex(0));
    dispatch(formActions.setFormData(initialState));
  }

  useEffect(() => {
    const fetchCountries = async () => {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          return response.json();
        })
        .then((data) => {
          let array: any = [];
          data.map((country: any, idx: string) => {
            const countryObject: {
              label: string;
              value: string;
            } = { label: "", value: "" };
            country.id = idx;
            countryObject.label = country.name.common;
            countryObject.value = country.name.common;
            array.push(countryObject);
          });
          setCountries(array);
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    };
    fetchCountries();
  }, []);

  return (
    <form className="w-[30rem]" onSubmit={handleSubmit(submit)}>
      <p className="text-2xl">Address Details</p>
      <div className="flex w-full flex-col">
        <FormControl>
          <FormLabel htmlFor={"name"}>Address</FormLabel>
          <TextField {...register("address")} margin="normal" />
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
          <Autocomplete
            options={countries}
            isOptionEqualToValue={(option: any, value: any) =>
              option.id === value.id
            }
            renderInput={(params) => (
              <TextField {...params} {...register("country")} />
            )}
          />
          {errors.country && (
            <p className="text-sm text-red-800">{errors.country.message}</p>
          )}
        </FormControl>
        {/* <FormControl>
          <FormLabel htmlFor={"country"}>Country</FormLabel>
          <TextField {...register("country")} margin="normal" />
        </FormControl> */}
      </div>
      <div className="flex flex-row justify-between mt-5">
        <Button
          variant="contained"
          color="primary"
          disabled={index == 0}
          onClick={() => {
            dispatch(stepActions.toggleIndex(1));
          }}
        >
          Previous
        </Button>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddressDetails;
