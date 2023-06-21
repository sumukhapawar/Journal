import { AppBar, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <AppBar sx={{ bgcolor: "text.primary", p: 0.7 }} position="static">
      <Toolbar variant="regular">
        <Typography variant="h5" component="h1">
          Journal
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
