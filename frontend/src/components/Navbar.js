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
    <AppBar
      position="sticky"
      style={{top: 0, left: 0, right: 0, width: "100%", padding: 0, margin: 0}}
    >
      <Toolbar sx={{justifyContent: "space-between", paddingRight: 0}}>
        <Typography variant="h5" component="div">
          <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
            TeeArtists
          </Link>
        </Typography>
        <div>
          <IconButton component={Link} to="/products" color="inherit">
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
          <Link
            to="/"
            style={{
              color: "inherit",
              marginRight: "10px",
              textDecoration: "none"
            }}
          >
            Home
          </Link>
          <Link
            to="/products"
            style={{
              color: "inherit",
              marginRight: "10px",
              textDecoration: "none"
            }}
          >
            Products
          </Link>
          {/* <Link to="/contact" style={{ color: "inherit", textDecoration: "none" }}>
            Contact
          </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import React, {useEffect, useState} from "react";
// import {Link, useNavigate} from "react-router-dom";
// import {IconButton} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import "./Navbar.css";

// function Navbar() {
//   // const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [size, setSize] = useState({
//     width: 0,
//     height: 0
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setSize({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });
//     };
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (size.width > 768 && menuOpen) {
//       setMenuOpen(false);
//     }
//   }, [size.width, menuOpen]);

//   const menuToggleHandler = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="header">
//       <div className="header__content">
//         <Link to="/" className="header__content__logo">
//           Navbar
//         </Link>
//         <nav
//           className={`${"header__content__nav"} ${
//             menuOpen && size.width < 768 ? `${"isMenu"}` : ""
//           }`}
//         >
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/profile">Profile</Link>
//             </li>
//             <li>
//               <Link to="/works">Browse Works</Link>
//             </li>
//             <li>
//               <Link to="/help">Help</Link>
//             </li>
//             <li>
//               <Link to="/register">
//                 <button className="btn">Register</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/login">
//                 <button className="btn btn__login">Login</button>
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <div className="header__content__toggle">
//           {!menuOpen ? (
//             <IconButton onClick={menuToggleHandler}>
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <IconButton onClick={menuToggleHandler}>
//               <CloseIcon />
//             </IconButton>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;
