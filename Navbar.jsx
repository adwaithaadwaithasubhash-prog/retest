import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "purple" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          BlogApp
        </Typography>

        <Button color="inherit" component={Link} to="/">
          HOME
        </Button>

        <Button color="inherit" component={Link} to="/add">
          ADD
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
