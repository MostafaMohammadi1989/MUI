import * as React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import styled, { css } from "styled-components";

export default function FormTextField() {
  return (
    <div>
      <Box
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
          id="username"
          type={"text"}
          placeholder="Username"
          variant="outlined"
          label="Outlined"
          required
        />
        <TextField
          id="email"
          type={"email"}
          placeholder="Email"
          variant="outlined"
          label="Email"
          required
        />
        <TextField
          id="password"
          type={"password"}
          placeholder="Password"
          variant="outlined"
          label="Password"
          required
        />
        <Button variant="outlined" type="submit">
          <Typography variant="h5" component="h5">
            Submit Form
          </Typography>
        </Button>
      </Box>
    </div>
  );
}
