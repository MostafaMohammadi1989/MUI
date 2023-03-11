import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import styled, { css } from "styled-components";
import { useState } from "react";

export default function TextFields() {
  const [name, setName] = useState("");
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Box
        component="div"
        border={1}
        borderColor="primary.main"
        // borderRadius={16}
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          margin: "0 auto",
        }}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={margintText}
          type={"text"}
          placeholder="Username"
          variant="outlined"
        />
        <TextField
          sx={margintText}
          type={"email"}
          placeholder="Email"
          variant="standard"
        />
        <TextField
          sx={margintText}
          type={"password"}
          placeholder="Password"
          variant="filled"
        />
        <Typography>{name}</Typography>
      </Box>
    </Box>
  );
}

const margintText = css`
  margin: 20px;
`;
