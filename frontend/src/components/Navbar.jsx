import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function Navbar() {
  return (
    <AppBar sx={{ bgcolor: "#F0FFFF", py: 1 }} position="sticky">
      <Toolbar variant="regular">
        <Container fixed>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "text.primary" }}
          >
            Journal
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
