import * as React from "react";
import { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
          }
          label="My Checkbox label"
        />
      </div>
    </>
  );
}
