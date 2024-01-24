import React, { useState } from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import PersonalDetails from "../form/PersonalDetails";
import AddressDetails from "../form/AddressDetails";
import { useAppDispatch, useAppSelector } from "../../redux/store/storeHook";
import { RootState } from "../../redux/store/store";
import { stepActions } from "../../redux/slices/step/stepSlice";

export default function StepperForm() {
  const { formData } = useAppSelector((state: RootState) => state.form);
  const { index } = useAppSelector((state: RootState) => state.step);

  const [activeStep, setActiveStep] = React.useState(0);
  const [hold, setHold] = React.useState(false);
  const dispatch = useAppDispatch();
  const [submission, setSubmission] = useState<{
    personal: boolean;
    address: boolean;
  }>({
    personal: true,
    address: true,
  });

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: "Personal Information",
      component: <PersonalDetails />,
    },
    {
      label: "Address Information",
      component: <AddressDetails setHold={setHold} />,
    },
  ];

  return (
    <Box>
      <React.Fragment>
        <div className="flex items-center flex-col justify-center">
          <div className="">
            <div>{steps[index].component}</div>
            {/* <div className="flex flex-row justify-between">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={activeStep == 0}
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
                onClick={() => {
                  dispatch(stepActions.incrementIndex(1));
                }}
              >
                {activeStep < 1 ? "Next" : "Submit"}
              </Button>
            </div> */}
          </div>
        </div>
      </React.Fragment>
    </Box>
  );
}
