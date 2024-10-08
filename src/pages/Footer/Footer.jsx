// import React from "react";
// import { Box, Typography, Link, Divider, Stack } from "@mui/material";

// const Footer = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           backgroundColor: "#1A1A1A",
//           color: "#fff",
//           padding: "20px",
//           textAlign: "left",
//         }}
//       >
//         <Stack direction="column" spacing={3}>
//           {/* Additional Links Section */}
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               ADDITIONAL LINKS
//             </Typography>
//             <Divider
//               sx={{
//                 width: "40px",
//                 height: "3px",
//                 backgroundColor: "#00cccc",
//                 marginBottom: "10px",
//               }}
//             />
//             <Stack spacing={1}>
//               <Link href="#" color="inherit" underline="none">
//                 Impact Factor
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Submit Manuscript
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Editorial Board
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Pay Fees
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Contact Us
//               </Link>
//             </Stack>
//           </Box>

//           {/* Quick Links Section */}
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               QUICK LINKS
//             </Typography>
//             <Divider
//               sx={{
//                 width: "40px",
//                 height: "3px",
//                 backgroundColor: "#00cccc",
//                 marginBottom: "10px",
//               }}
//             />
//             <Stack spacing={1}>
//               <Link href="#" color="inherit" underline="none">
//                 Call for Paper
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Topics
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Author Guidelines
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Check Paper Status
//               </Link>
//               <Link href="#" color="inherit" underline="none">
//                 Peer Review Process
//               </Link>
//             </Stack>
//           </Box>

//           {/* Contact Us Section */}
//           <Box>
//             <Typography variant="h6" gutterBottom>
//               CONTACT US
//             </Typography>
//             <Divider
//               sx={{
//                 width: "40px",
//                 height: "3px",
//                 backgroundColor: "#00cccc",
//                 marginBottom: "10px",
//               }}
//             />
//             <Typography variant="body2" gutterBottom>
//               42 A, Second Street, Hamirpur Rourkela Sundargarh Odisha India
//               769003
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               ijhssm.paper@gmail.com
//             </Typography>
//           </Box>
//         </Stack>

//         {/* Copyright Section */}
//       </Box>
//       <Box
//         sx={{
//           textAlign: "center",         
//           backgroundColor: "#00cccc",
//           padding: "10px",
//         }}
//       >
//         <Typography variant="body2" color="#fff">
//           ijhssm © Copyrights 2022
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default Footer;
import React from "react";
import { Box, Typography, Link, Divider, Stack, Grid } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1A1A1A",
          color: "#fff",
          padding: "20px",
          textAlign: "left",
        }}
      >
        {/* Grid for responsiveness */}
        <Grid container spacing={3}>
          {/* Additional Links Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                ADDITIONAL LINKS
              </Typography>
              <Divider
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "#00cccc",
                  marginBottom: "10px",
                }}
              />
              <Stack spacing={1}>
                <Link href="#" color="inherit" underline="none">
                  Impact Factor
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Submit Manuscript
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Editorial Board
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Pay Fees
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Contact Us
                </Link>
              </Stack>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                QUICK LINKS
              </Typography>
              <Divider
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "#00cccc",
                  marginBottom: "10px",
                }}
              />
              <Stack spacing={1}>
                <Link href="#" color="inherit" underline="none">
                  Call for Paper
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Topics
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Author Guidelines
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Check Paper Status
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Peer Review Process
                </Link>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography variant="h6" gutterBottom>
                CONTACT US
              </Typography>
              <Divider
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "#00cccc",
                  marginBottom: "10px",
                }}
              />
              <Typography variant="body2" gutterBottom>
                42 A, Second Street, Hamirpur Rourkela Sundargarh Odisha India
                769003
              </Typography>
              <Typography variant="body2" gutterBottom>
                ijhssm.paper@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
      </Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#00cccc",
          padding: "10px",
        }}
      >
        <Typography variant="body2" color="#fff">
          ijhssm © Copyrights 2022
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
