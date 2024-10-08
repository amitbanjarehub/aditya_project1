// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Box,
//   Link,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import Logo from "./vertexSuiteLogo.png";

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const isMobile = useMediaQuery("(max-width:600px)"); // Mobile breakpoint

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   const list = () => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer}
//       onKeyDown={toggleDrawer}
//     >
//       <List>
//         {[
//           "Home",
//           "Research Paper",
//           "Current Issue",
//           "Publication Archive",
//           "Editors & Reviewers",
//           "Conference",
//           "Contact Us",
//         ].map((text) => (
//           <ListItem button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static" style={{ backgroundColor: "#1A1A1A" }}>
//       <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
//         {/* Left Logo with Hamburger Icon */}
//         <Box display="flex" alignItems="center">
//           {/* Hamburger Icon */}
//           {isMobile && (
//             <>
//               <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
//                 <MenuIcon sx={{ fontSize: 32 }}/>
//               </IconButton>
//               <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//                 {list()}
//               </Drawer>
//             </>
//           )}

//           {/* Logo */}
//           <img
//             src={Logo}
//             alt="IJFMR Logo"
//             height="20px"
//             style={{ marginLeft: isMobile ? 0 : 10 }}
//           />

//             <Typography variant="h6" style={{ marginLeft: 10, color: "white" }}>
//               IJFMR
//             </Typography>

//         </Box>

//         {/* Desktop Navigation Links */}
//         {!isMobile && (
//           <Box display="flex" alignItems="center" gap={3}>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Home
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Research Paper
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Current Issue
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Publication Archive
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Editors & Reviewers
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Conference
//             </Link>
//             <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
//               Contact Us
//             </Link>
//           </Box>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Logo from "./vertexSuiteLogo.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)"); // Mobile breakpoint

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {/* Close button at the top-right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Box>

      <List>
        {[
          "Home",
          "Research Paper",
          "Current Issue",
          "Publication Archive",
          "Editors & Reviewers",
          "Conference",
          "Contact Us",
        ].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: "#1A1A1A" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Logo with Hamburger Icon */}
        <Box display="flex" alignItems="center">
          {/* Hamburger Icon */}
          {isMobile && (
            <>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                <MenuIcon sx={{ fontSize: 32 }} />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                {list()}
              </Drawer>
            </>
          )}

          {/* Logo */}
          <img
            src={Logo}
            alt="IJFMR Logo"
            height="20px"
            style={{ marginLeft: isMobile ? 0 : 10 }}
          />

          <Typography variant="h6" style={{ marginLeft: 10, color: "white" }}>
            IJFMR
          </Typography>
        </Box>

        {/* Desktop Navigation Links */}
        {!isMobile && (
          <Box display="flex" alignItems="center" gap={3}>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Research Paper
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Current Issue
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Publication Archive
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Editors & Reviewers
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Conference
            </Link>
            <Link href="#" color="inherit" style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
