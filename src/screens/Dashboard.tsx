import { Box } from "@mui/material";
import DashboardCards from "../components/dashboard/DashboardCards";
import QuickActions from "../components/dashboard/QuickActions";
import SystemAlerts from "../components/dashboard/SystemAlerts";
import UserDistribution from "../components/dashboard/UserDistribution";
import RecentActivity from "../components/dashboard/RecentActivity";

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: "#f9fafb",
        padding: { xs: "1rem", sm: "2rem", md: "3rem" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "1.5rem", md: "2rem" },
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Top Section */}
      <DashboardCards />
      <QuickActions />

      {/* System Alerts + User Distribution */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "stretch",
          gap: { xs: "1.5rem", md: "2rem" },
          width: "100%",
        }}
      >
        <Box sx={{ flex: "1 1 50%" }}>
          <SystemAlerts />
        </Box>

        <Box sx={{ flex: "1 1 50%" }}>
          <UserDistribution />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <RecentActivity />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
