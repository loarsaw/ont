import React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import PersonalDetails from "../form/PersonalDetails";
import AddressDetails from "../form/AddressDetails";
import { useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";

export default function StepperForm() {
  const { index } = useAppSelector((state: RootState) => state.step);

  const steps = [
    {
      label: "Personal Information",
      component: <PersonalDetails />,
    },
    {
      label: "Address Information",
      component: <AddressDetails />,
    },
  ];

  return (
    <Box>
      <React.Fragment>
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <div>{steps[index].component}</div>
          </div>
        </div>
      </React.Fragment>
    </Box>
  );
}
