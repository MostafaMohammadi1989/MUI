import { Typography, Box } from "@mui/material";

export default function Text() {
  return (
    <>
      <Typography variant="h1" component="h3" color="green" align="center">
        Meisam
        <Box
          sx={{
            border: 1,
            borderRadius: 3,
            borderColor: "blue",
          }}
          dis
        >
          <Typography
            variant="subtitle1"
            component="body"
            color="primary.main"
            paragraph={true}
            sx={{ margin: 0 }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            consectetur!
          </Typography>
        </Box>
      </Typography>
    </>
  );
}
