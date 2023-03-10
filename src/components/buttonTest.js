import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
// import { css } from "@emotion/react";
import styled, { css } from "styled-components";
// import { styled } from "@mui/material/styles";
// import { PhotoCamera } from "@mui/icons-material";
// import { IconButton } from "@mui/material";

// const theme
export default function ButtonComponent() {
  return (
    <Stack>
      <Stack spacing="2" direction="row" sx={{ display: "block" }}>
        <Button
          color="primary"
          size="medium"
          variant="contained"
          sx={{ margin: 3 }}
          onClick={(e) => {
            alert("Button Contained");
          }}
        >
          <Typography variant="button">Contained</Typography>
        </Button>
        <Button
          color="success"
          size="small"
          variant="outlined"
          sx={{ margin: 3 }}
          onClick={(e) => {
            alert("Button OutLined");
          }}
        >
          <Typography variant="body1">OutLined</Typography>
        </Button>
        <Button
          color="warning"
          size="large"
          variant="text"
          sx={{ margin: 3 }}
          onClick={(e) => {
            alert("Button OutLined");
          }}
        >
          Text
        </Button>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        // divider={<Divider orientation="vertical" flexItem />}
      >
        <Button variant="contained">Meisam</Button>
        <Button disabled>Disabled</Button>
        <Button href="#">Link</Button>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button variant="contained" sx={{ margin: "10px" }}>
          Contained with Elevation
        </Button>
        <Button variant="contained" disableElevation>
          Disabled Elevation
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing="2"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Stack>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <Button color="error" variant="contained" size="large" sx={styleBTN}>
          Contained
        </Button>
        <Button color="primary" variant="outlined" size="mediume" sx={styleBTN}>
          OutLined
        </Button>
        <Button color="error" variant="text" size="small" sx={styleBTN}>
          Text
        </Button>
      </Stack>
    </Stack>
  );
}

// const Buttonss = styled("button")(() => {
//   margin: "30px",
// });

const styleBTN = css`
  margin: 30px;
`;
