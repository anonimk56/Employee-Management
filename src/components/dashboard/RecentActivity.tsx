import { Box, Typography, Link, Avatar } from "@mui/material";
import { RecentActivityData } from "../../utils/Constants";

const typeStyles: Record<string, { bg: string; color: string; label: string }> =
  {
    created: { bg: "#10B9811A", color: "#10B981", label: "Role Created" },
    modified: {
      bg: "#F59E0B1A",
      color: "#F59E0B",
      label: "Permission Updated",
    },
    suspended: { bg: "#EF44441A", color: "#EF4444", label: "User Suspended" },
  };

function RecentActivity() {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "0.75rem",
        p: { xs: "1rem", sm: "1.5rem" },
        display: "flex",
        flexDirection: "column",
        gap: "1.2rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Rubik, sans-serif",
            fontWeight: 500,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            color: "#1F2937",
          }}
        >
          Recent Activity
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

      {/* Activity Items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.8rem",
        }}
      >
        {RecentActivityData.map((activity) => {
          const { bg, color, label } = typeStyles[activity.type];
          return (
            <Box
              key={activity.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#F9FAFB",
                borderRadius: "0.5rem",
                p: { xs: "0.8rem", sm: "1rem" },
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {/* Left side: Avatar + Title + Time */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  flex: "1 1 70%",
                }}
              >
                <Avatar
                  src={activity.img}
                  alt={activity.title}
                  sx={{ width: 40, height: 40, bgcolor: "#E5E7EB" }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Rubik, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "0.85rem", sm: "0.95rem" },
                      color: "#111827",
                    }}
                  >
                    {activity.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Rubik, sans-serif",
                      fontSize: { xs: "0.75rem", sm: "0.8rem" },
                      color: "#6B7280",
                      mt: "0.2rem",
                    }}
                  >
                    {activity.time}
                  </Typography>
                </Box>
              </Box>

              {/* Right side: Status Badge */}
              <Box
                sx={{
                  backgroundColor: bg,
                  color: color,
                  borderRadius: "9999px",
                  px: "0.9rem",
                  py: "0.4rem",
                  fontFamily: "Rubik",
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  fontWeight: 400,
                  textAlign: "center",
                  flexShrink: 0,
                }}
              >
                {label}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default RecentActivity;
