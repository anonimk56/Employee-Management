import DashboardIcon from "../icons/DashboardIcon";
import ErrorLogsIcon from "../icons/ErrorLogsIcon";
import FeaturePermissionIcon from "../icons/FeaturePermissionIcon";
import RolePermissionIcon from "../icons/RolePermissionIcon";
import UsageLogsIcon from "../icons/UsageLogsIcon";
import UserManagementIcon from "../icons/UserManagementIcon";

export const SidebarItems = [
  {
    id: 1,
    //   href: DASHBOARD_SCREEN_ROUTE,
    icon: <DashboardIcon />,
    title: "Dashboard",
  },
  {
    id: 2,
    //   href: PROJECTS_SCREEN_ROUTE,
    icon: <UserManagementIcon />,
    title: "User Management",
  },
  {
    id: 3,
    //   href: PROJECTS_SCREEN_ROUTE,
    icon: <RolePermissionIcon />,
    title: "Role & Permission",
  },
  {
    id: 4,
    //   href: PROJECTS_SCREEN_ROUTE,
    icon: <FeaturePermissionIcon />,
    title: "Feature Permission",
  },
  {
    id: 5,
    //   href: PROJECTS_SCREEN_ROUTE,
    icon: <ErrorLogsIcon />,
    title: "Error Logs & Monitoring",
  },
  {
    id: 6,
    //   href: PROJECTS_SCREEN_ROUTE,
    icon: <UsageLogsIcon />,
    title: "Feature Usage Logs",
  },
];
