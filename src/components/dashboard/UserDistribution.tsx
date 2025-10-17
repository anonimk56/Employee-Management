import { Box, Typography } from "@mui/material";
import { UserDistributionData } from "../../utils/Constants";

function UserDistribution() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      p={{ xs: "1.4rem", sm: "1.6rem", md: "2rem" }}
      borderRadius="0.75rem"
      border="1px solid #E5E7EB"
      boxShadow="0px 1px 2px 0px #0000000D"
      bgcolor="#FFFFFF"
      sx={{
        flexShrink: 0,
        boxSizing: "border-box",
        minHeight: { xs: "22rem", sm: "25rem", md: "29.5rem", lg: "28.8rem" },
      }}
    >
      <Typography
        fontFamily="Rubik"
        fontWeight={500}
        fontSize={{ xs: "1rem", sm: "1.1rem", md: "1.2rem" }}
        color="#111827"
        textAlign="center"
        mb={{ xs: "0.8rem", md: "1rem" }}
      >
        User Distribution by Role
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: "0.5rem", md: "0.75rem" }}
      >
        {UserDistributionData.map((item) => (
          <Box
            key={item.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={{ xs: "0.6rem 0.75rem", md: "0.75rem 1rem" }}
            sx={{
              borderRadius: "0.5rem",
              transition: "background-color 0.2s ease",
              "&:hover": { backgroundColor: "#F9FAFB" },
            }}
          >
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Box>{item.icon}</Box>
              <Typography
                fontFamily="Rubik"
                fontWeight={500}
                fontSize={{ xs: "0.9rem", sm: "1rem" }}
                color="#1F2937"
              >
                {item.title}
              </Typography>
            </Box>

            <Typography
              fontFamily="Rubik"
              fontWeight={400}
              fontSize={{ xs: "0.85rem", sm: "0.95rem" }}
              color="#6B7280"
            >
              {item.users}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default UserDistribution;
