import React from "react";
import { Box, Typography } from "@mui/material";
import QuickActionsCards from "./QuickActionsCards";

const QuickActions: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0px 1px 2px 0px #0000000D",
        borderRadius: "0.75rem",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
          fontSize: "1.25rem",
          lineHeight: "100%",
          color: "#111827",
          textAlign: "center",
          p: 1,
        }}
      >
        Quick Actions
      </Typography>

      <QuickActionsCards />
    </Box>
  );
};

export default QuickActions;
