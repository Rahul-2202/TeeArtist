import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton
} from "@mui/material";
import {Link} from "react-router-dom";
import {
  Search as SearchIcon,
  Person as PersonIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <Link to="/">My eCommerce App</Link>
        </Typography>
        <div>
          <IconButton component={Link} to="/profile" color="inherit">
            <PersonIcon />
          </IconButton>
          <IconButton component={Link} to="/cart" color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
        <div>
          <InputBase
            placeholder="Search products..."
            inputProps={{"aria-label": "search"}}
            sx={{color: "inherit"}}
          />
          <IconButton type="submit" sx={{p: "10px"}} aria-label="search">
            <SearchIcon />
          </IconButton>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {/* <Link to="/contact">Contact</Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
