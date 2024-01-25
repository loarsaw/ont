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
    <div className="flex items-center justify-center h-full flex-col">
      <div className="w-[70%]">
        <StepperForm />
      </div>
      <div>
        <h1>FormData goes Here</h1>
        <DataTable />
      </div>
    </div>
    // <div className="flex items-center flex-col justify-center">
    //   <p className="text-lg">Personal Details</p>
    //   <form onSubmit={handleSubmit}>
    //     <FormControl fullWidth>
    //       <FormLabel>Name</FormLabel>
    //       <TextField
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //         margin="normal"
    //       />

    //       <FormLabel>Age</FormLabel>
    //       <TextField
    //         name="age"
    //         value={formData.age}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //       <FormLabel>Mobile</FormLabel>
    //       <TextField
    //         name="mobile"
    //         value={formData.mobile}
    //         onChange={handleChange}
    //         margin="normal"
    //       />
    //     </FormControl>

    //     <div className="flex w-[30rem] flex-row items-center justify-between">
    //       <FormControl size="medium">
    //         <Select
    //           // fullWidth
    //           className="mt-2"
    //           label="Sex"
    //           id="sex"
    //           name="sex"
    //           value={formData.sex}
    //           onChange={handleSelectChange}
    //         >
    //           <MenuItem value="male">Male</MenuItem>
    //           <MenuItem value="female">Female</MenuItem>
    //           <MenuItem value="other">Other</MenuItem>
    //         </Select>
    //       </FormControl>
    //       {/* <FormControl> */}

    //       <TextField
    //         label="AGE"
    //         name="id"
    //         value={formData.id}
    //         onChange={handleChange}
    //         className="w-[80%]"
    //         margin="normal"
    //       />
    //       {/* </FormControl> */}
    //     </div>
    //     <div className="flex w-[30rem] flex-row items-center justify-between">
    //       <FormControl size="medium" className="w-[30%]">
    //         <Select
    //           className="mt-2"
    //           label="Sex"
    //           id="sex"
    //           name="idType"
    //           value={formData.idType}
    //           onChange={handleSelectChange}
    //         >
    //           <MenuItem value="male">Adhaar Card</MenuItem>
    //           <MenuItem value="female">Pan Card</MenuItem>
    //           <MenuItem value="other">Drivers </MenuItem>
    //         </Select>
    //       </FormControl>

    //       <TextField
    //         label="ID"
    //         name="id"
    //         value={formData.id}
    //         onChange={handleChange}
    //         className="w-[60%]"
    //         margin="normal"
    //       />
    //     </div>
    //     <Button type="submit" variant="contained" color="primary">
    //       Submit
    //     </Button>
    //   </form>
    // </div>
  );
};

export default MyForm;
