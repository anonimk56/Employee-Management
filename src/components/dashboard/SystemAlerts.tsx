import { Box, Typography, Link } from "@mui/material";
import SystemAlertsCards from "./SystemAlertsCards";

function SystemAlerts() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      p={{ xs: "1rem", sm: "1.2rem", md: "1.3rem" }}
      borderRadius="0.75rem"
      border="1px solid #E5E7EB"
      boxShadow="0px 1px 2px 0px #0000000D"
      bgcolor="#FFFFFF"
      sx={{
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: { xs: "20rem", sm: "21rem", md: "25rem" },
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={{ xs: "0.8rem", md: "1rem" }}
      >
        <Typography
          fontFamily="Rubik"
          fontWeight={500}
          fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
          color="#1F2937"
        >
          System Alerts
        </Typography>

        <Link
          href="#"
          underline="none"
          sx={{
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "0.95rem" },
            color: "#6F2D7A",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          View All
        </Link>
      </Box>

      {/* Cards */}
      <SystemAlertsCards />
    </Box>
  );
}

export default SystemAlerts;
