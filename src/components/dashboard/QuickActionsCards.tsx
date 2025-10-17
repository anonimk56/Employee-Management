import React from "react";
import { Box, Typography } from "@mui/material";
import { QuickActionsData } from "../../utils/Constants";

const QuickActionsCards: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "flex-start",
      }}
    >
      {QuickActionsData.map(({ id, icon, title, text }) => (
        <Box
          key={id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            border: "2px dashed #E5E7EB",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            minWidth: "18rem",
            flex: "1 1 20rem",
            backgroundColor: "#FFFFFF",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#9CA3AF",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            },
          }}
        >
          {/* Icon */}
          <Box
            sx={{ fontSize: "1.8rem", display: "flex", alignItems: "center" }}
          >
            {icon}
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Rubik, sans-serif",
                fontWeight: 500,
                fontSize: "1rem",
                color: "#111827",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Rubik, sans-serif",
                fontWeight: 400,
                fontSize: "0.875rem",
                color: "#6B7280",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default QuickActionsCards;
