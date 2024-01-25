import React, { useState, ChangeEvent, FormEvent } from "react";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { FormLabel } from "@mui/material";
import StepperForm from "./components/stepper";
import { useAppSelector } from "./redux/store/storeHook";
import { RootState } from "./redux/store/store";
import DataTable from "./components/table";

interface FormData {
  name: string;
  mobile: string;
  sex: string;
  age: string;
  id: string;
  idType: string;
}

const MyForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-full flex-col ">
      <div className="w-[70%]">
        <StepperForm />
      </div>
      <div className="mt-5">
        <DataTable />
      </div>
    </div>
  );
};

export default MyForm;
