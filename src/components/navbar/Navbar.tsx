import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import NotificationIcon from "../icons/NotificationIcon";

interface NavbarProps {
  screen: "Dashboard" | "User Management" | "Role & Permission";
  userCount?: number;
  roleCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ screen, userCount, roleCount }) => {
  const titleText = {
    fontFamily: "Rubik, sans-serif",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: "100%",
    color: "#1F2937",
  };

  const subText = {
    fontFamily: "Rubik, sans-serif",
    fontWeight: 400,
    color: "#6B7280",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#E5E7EB",
        px: 3,
        py: 2,
        borderBottom: "1px solid #E5E7EB",
        boxShadow: "0px 1px 2px 0px #0000000D",
      }}
    >
      {/* Left section */}
      <Box>
        {screen === "Dashboard" ? (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={titleText}>{screen}</Typography>
            <Typography
              sx={{ ...subText, fontSize: "1rem", lineHeight: "100%" }}
            >
              Welcome back, System Admin
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            <Typography sx={titleText}>{screen}</Typography>

            {screen === "User Management" && (
              <Typography
                sx={{ ...subText, fontSize: "0.95rem", lineHeight: "20px" }}
              >
                Total users: {userCount ?? 0}
              </Typography>
            )}

            {screen === "Role & Permission" && (
              <Typography
                sx={{ ...subText, fontSize: "0.95rem", lineHeight: "20px" }}
              >
                Total roles: {roleCount ?? 0}
              </Typography>
            )}
          </Box>
        )}
      </Box>

      {/* Right section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        <Avatar
          alt="Maryam Khan"
          src="/ProfilePic.jpeg"
          sx={{ width: 36, height: 36, cursor: "pointer" }}
        />
        <Typography
          sx={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "20px",
            cursor: "pointer",
            color: "#374151",
          }}
        >
          Maryam Khan
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
