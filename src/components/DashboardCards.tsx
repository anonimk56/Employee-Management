import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DashboardCardsData } from "../utils/Constants";

const DashboardCards: React.FC = () => {
  const theme = useTheme();

  // shared base styles
  const baseText = {
    fontFamily: "Rubik",
    fontWeight: 400,
    fontStyle: "Regular",
    lineHeight: "100%",
    letterSpacing: "0%",
  };

  // color mapping for each description by id
  const descriptionColors: Record<number, string> = {
    1: "#10B981", // green
    2: "#6B7280", // gray
    3: "#EF4444", // red
    4: "#10B981", // green
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
        gap: "1.5rem",
      }}
    >
      {DashboardCardsData.map((card) => (
        <Box
          key={card.id}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            boxShadow: "0px 1px 2px 0px #0000000D",
            borderRadius: "12px",
            padding: "2rem",
            minHeight: "15vh",
            transition: "transform 0.2s ease",
            "&:hover": { transform: "translateY(-3px)" },
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              textAlign: "center",
              gap: "0.75rem",
              minHeight: "auto",
            },
          }}
        >
          {/* Left side */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
              flexGrow: 1,
            }}
          >
            {/* Title */}
            <Typography
              sx={{
                ...baseText,
                fontSize: "0.9rem",
                color: "#6B7280",
                [theme.breakpoints.down("sm")]: { fontSize: "0.85rem" },
              }}
            >
              {card.title}
            </Typography>

            {/* Number */}
            <Typography
              sx={{
                ...baseText,
                fontSize: "1.9rem",
                color: "#111827",
                [theme.breakpoints.down("sm")]: { fontSize: "1.5rem" },
              }}
            >
              {card.number}
            </Typography>

            {/* Description */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Box sx={{ fontSize: "1rem" }}>{card.descriptionIcon}</Box>
              <Typography
                sx={{
                  ...baseText,
                  fontSize: "0.9rem",
                  color: descriptionColors[card.id] || "#6B7280",
                  [theme.breakpoints.down("sm")]: { fontSize: "0.85rem" },
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Box>

          {/* Right side (main icon) */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
              [theme.breakpoints.down("sm")]: { fontSize: "2rem" },
            }}
          >
            {card.icon}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DashboardCards;
