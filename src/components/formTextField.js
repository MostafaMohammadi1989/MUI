import * as React from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";
import styled, { css } from "styled-components";
import { useState } from "react";

export default function FormTextField() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: true,
    age: 0,
    gender: "",
  });
  const handelChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div>
      <Box
        onSubmit={handelSubmit}
        noValidate
        autoComplete="off"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1.5, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          name="name"
          value={input.name}
          onChange={handelChange}
          id="username"
          type={"text"}
          placeholder="Username"
          variant="outlined"
          label="Outlined"
          required
        />
        <TextField
          name="email"
          value={input.email}
          onChange={handelChange}
          id="email"
          type={"email"}
          placeholder="Email"
          variant="outlined"
          label="Email"
          required
        />
        <TextField
          name="password"
          value={input.password}
          onChange={handelChange}
          id="password"
          type={"password"}
          placeholder="Password"
          variant="outlined"
          label="Password"
          required
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                onChange={() =>
                  setInput((prev) => ({
                    ...prev,
                    subscribe: !input.subscribe,
                  }))
                }
              />
            }
            label="Subscribe"
          />
        </FormGroup>
        <FormControl fullWidth>
          <InputLabel>Age Emply</InputLabel>
          <Select
            name="age"
            value={input.age}
            label="Age Employ"
            onChange={handelChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name="gender" onChange={handelChange}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button variant="outlined" type="submit">
          <Typography variant="h5" component="h5">
            Submit Form
          </Typography>
        </Button>
      </Box>
    </div>
  );
}
