import RolePermission from "../screens/RolePermission";
import UserManagement from "../screens/UserManagement";
import ErrorLogsIcon from "../components/icons/ErrorLogsIcon";
import FeaturePermissionIcon from "../components/icons/FeaturePermissionIcon";
import RolePermissionIcon from "../components/icons/RolePermissionIcon";
import UsageLogsIcon from "../components/icons/UsageLogsIcon";
import UserManagementIcon from "../components/icons/UserManagementIcon";
import Dashboard from "../screens/Dashboard";
import DashboardIcon from "../components/icons/DashboardIcon";
import ArrowUpRedIcon from "../components/icons/ArrowUpRedIcon";
import RecentErrorsIcon from "../components/icons/RecentErrorsIcon";
import CheckmarkGreenIcon from "../components/icons/CheckmarkGreenIcon";
import ActiveUsersIcon from "../components/icons/ActiveUsersIcon";
import ActiveRolesIcon from "../components/icons/ActiveRolesIcon";
import DashIcon from "../components/icons/DashIcon";
import TotalUsersIcon from "../components/icons/TotalUsersIcon";
import ArrowUpGreenIcon from "../components/icons/ArrowUpGreenIcon";

export const SidebarItems = [
  {
    id: 1,
    href: <Dashboard />,
    icon: <DashboardIcon />,
    title: "Dashboard",
  },
  {
    id: 2,
    href: <UserManagement />,
    icon: <UserManagementIcon />,
    title: "User Management",
  },
  {
    id: 3,
    href: <RolePermission />,
    icon: <RolePermissionIcon />,
    title: "Role & Permission",
  },
  {
    id: 4,
    icon: <FeaturePermissionIcon />,
    title: "Feature Permission",
  },
  {
    id: 5,
    icon: <ErrorLogsIcon />,
    title: "Error Logs & Monitoring",
  },
  {
    id: 6,
    icon: <UsageLogsIcon />,
    title: "Feature Usage Logs",
  },
];

export const DashboardCardsData = [
  {
    id: 1,
    title: "Total Users",
    number: 1240,
    description: "+12% from last month",
    descriptionIcon: <ArrowUpGreenIcon />,
    icon: <TotalUsersIcon />,
  },
  {
    id: 2,
    title: "Active Roles",
    number: 25,
    description: "No change",
    descriptionIcon: <DashIcon />,
    icon: <ActiveRolesIcon />,
  },
  {
    id: 3,
    title: "Recent Errors",
    number: 5,
    description: "+5 from yesterday",
    descriptionIcon: <ArrowUpRedIcon />,
    icon: <RecentErrorsIcon />,
  },
  {
    id: 4,
    title: "Active Users",
    number: 980,
    description: "All systems operational",
    descriptionIcon: <CheckmarkGreenIcon />,
    icon: <ActiveUsersIcon />,
  },
];
