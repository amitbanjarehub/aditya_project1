import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Link,
  Stack,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

const Header1 = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      sx={{
        backgroundColor: "#0099cc",
        height: { xl: "28px", lg: "28px", md: "28px", sm: "28px", xs: "28px" },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Contact Information */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ marginLeft: { lg: "12px", xs: "4px" } }}
        >
          <MailOutlineIcon
            style={{ marginRight: 2, fontSize: isMobile ? "16px" : "16px" }}
          />
          <Typography
            variant="body1"
            style={{ marginRight: 8, fontSize: { lg: "16px", xs: "8px" } }}
          >
            <Link
              href="mailto:editor@ijfmr.com"
              color="black"
              underline="none"
              sx={{ fontSize: { lg: "16px", xs: "12px" } }}
            >
              editor@ijfmr.com
            </Link>
          </Typography>
          <PhoneIcon
            style={{ marginRight: 2, fontSize: isMobile ? "14px" : "16px" }}
          />
          <Typography
            variant="body1"
            sx={{ fontSize: { lg: "16px", xs: "12px" } }}
          >
            <Link href="tel:+919888594855" color="black" underline="none">
              +91-9888-5948-55
            </Link>
          </Typography>
        </Box>

        <Stack
          sx={{
            flexDirection: "row",
            display: "flex",
            marginTop: "1px",
          }}
        >
          <IconButton
            href="https://www.facebook.com"
            target="_blank"
            color="inherit"
            style={{
              backgroundColor: "#3b5998",
              marginRight: 12,
              borderRadius: "50%",
              height: "20px",
              width: "20px",
              marginTop: "2px",
            }}
          >
            <FacebookIcon
              style={{ color: "#fff", height: "14px", width: "14px" }}
            />
          </IconButton>
          <IconButton
            href="https://www.whatsapp.com"
            target="_blank"
            color="inherit"
            style={{
              backgroundColor: "#25d366",
              borderRadius: "50%",
              height: "20px",
              marginRight: 4,
              width: "20px",
              marginTop: "2px",
            }}
          >
            <WhatsAppIcon
              style={{ color: "#fff", height: "14px", width: "14px" }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header1;
