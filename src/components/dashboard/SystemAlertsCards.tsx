import { Box, Typography } from "@mui/material";
import { SystemAlertsData } from "../../utils/Constants";

function SystemAlertsCards() {
  const alertStyles: Record<
    number,
    { bg: string; border: string; title: string; text: string; time: string }
  > = {
    1: {
      bg: "#FEF2F2",
      border: "#FEE2E2",
      title: "#7F1D1D",
      text: "#B91C1C",
      time: "#DC2626",
    },
    2: {
      bg: "#FEFCE8",
      border: "#FEF9C3",
      title: "#713F12",
      text: "#A16207",
      time: "#CA8A04",
    },
    3: {
      bg: "#F0FDF4",
      border: "#DCFCE7",
      title: "#14532D",
      text: "#15803D",
      time: "#16A34A",
    },
  };

  return (
    <Box display="flex" flexDirection="column" gap="1rem" width="100%">
      {SystemAlertsData.map((alert) => {
        const style = alertStyles[alert.id];
        return (
          <Box
            key={alert.id}
            display="flex"
            alignItems="flex-start"
            gap="1rem"
            borderRadius="0.5rem"
            border={`1px solid ${style.border}`}
            bgcolor={style.bg}
            p={{ xs: "0.8rem", md: "1rem" }}
            sx={{
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              },
            }}
          >
            {/* Icon */}
            <Box
              flexShrink={0}
              fontSize={{ xs: "1.8rem", md: "2rem" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {alert.icon}
            </Box>

            {/* Text Column */}
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography
                variant="subtitle1"
                fontWeight={600}
                color={style.title}
                fontSize={{ xs: "1rem", md: "1.1rem" }}
              >
                {alert.title}
              </Typography>

              <Typography
                variant="body2"
                color={style.text}
                fontSize={{ xs: "0.9rem", md: "1rem" }}
                mb="0.2rem"
              >
                {alert.text}
              </Typography>

              <Typography
                variant="caption"
                color={style.time}
                fontSize={{ xs: "0.75rem", md: "0.85rem" }}
              >
                {alert.time}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default SystemAlertsCards;
