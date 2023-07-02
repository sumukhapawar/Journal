import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar sx={{ bgcolor: "#F0FFFF" }} position="sticky">
      <Toolbar variant="regular">
        <Container fixed>
          <Typography
            variant="h4"
            component="h1"
            sx={{ color: "text.primary" }}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Journal
            </Link>
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
