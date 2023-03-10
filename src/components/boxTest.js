import * as React from "react";
import { Box, Button } from "@mui/material";

export default function BoxSx() {
  return (
    <>
      {" "}
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          margin: "0 auto",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Box
        component="span"
        sx={{
          p: 2,
          border: "1px dashed gray",
          display: "flex",
          margin: "0 auto",
          width: "100px",
        }}
      >
        <Button
          sx={{
            border: "2px dashed primary.dark",
            backgroundColor: "grey",
            margin: "0 auto",
          }}
        >
          Click Me
        </Button>
      </Box>
    </>
  );
}
