import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            color="text"
          >
            Temperature Converter
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
