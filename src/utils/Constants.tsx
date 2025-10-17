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
import AddNewUserIcon from "../components/icons/AddNewUserIcon";
import CreateRoleIcon from "../components/icons/CreateRoleIcon";
import TestPermissionIcon from "../components/icons/TestPermissionIcon";
import AuthErrorIcon from "../components/icons/AuthErrorIcon";
import PerformanceWarningIcon from "../components/icons/PerformanceWarningIcon";
import BackupCompletedIcon from "../components/icons/BackupCompletedIcon";
import PurpleDotIcon from "../components/icons/PurpleDotIcon";
import GreenDotIcon from "../components/icons/GreenDotIcon";
import OrangeDotIcon from "../components/icons/OrangeDotIcon";

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

export const QuickActionsData = [
  {
    id: 1,
    icon: <AddNewUserIcon />,
    title: "Add New User",
    text: "Create user account",
  },
  {
    id: 2,
    icon: <CreateRoleIcon />,
    title: "Create Role",
    text: "Define new role",
  },
  {
    id: 3,
    icon: <TestPermissionIcon />,
    title: "Test Permissions",
    text: "Launch simulator",
  },
];

export const SystemAlertsData = [
  {
    id: 1,
    icon: <AuthErrorIcon />,
    title: "Authentication Error",
    text: "Multiple failed login attempts detected",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: <PerformanceWarningIcon />,
    title: "Performance Warning",
    text: "Database response time increased",
    time: "15 minutes ago",
  },
  {
    id: 3,
    icon: <BackupCompletedIcon />,
    title: "Backup Completed",
    text: "Daily system backup successful",
    time: "1 hour ago",
  },
];

export const UserDistributionData = [
  {
    id: 1,
    icon: <PurpleDotIcon />,
    title: "Admin",
    users: "234 users",
  },
  {
    id: 2,
    icon: <GreenDotIcon />,
    title: "Manager",
    users: "892 users",
  },
  {
    id: 3,
    icon: <OrangeDotIcon />,
    title: "Employee",
    users: "1,456 users",
  },
];

export const RecentActivityData = [
  {
    id: 1,
    img: "",
    title: "John Smith created a new role 'Marketing Lead'",
    time: "2 hours ago",
    type: "created",
  },
  {
    id: 2,
    img: "",
    title: "Emma Wilson modified permissions for 'Sales Team'",
    time: "4 hours ago",
    type: "modified",
  },
  {
    id: 3,
    img: "",
    title: "Mike Johnson suspended user account for 'inactive@company.com'",
    time: "6 hours ago",
    type: "suspended",
  },
];

export const UserRolesData = [
  {
    id: 1,
    role: "Client Manager",
  },
  {
    id: 2,
    role: "Client Coordinater",
  },
  {
    id: 3,
    role: "Admin",
  },
  {
    id: 4,
    role: "Support Worker",
  },
];

export const UserStatusData = [
  {
    id: 1,
    status: "Active",
  },
  {
    id: 2,
    status: "Away",
  },
  {
    id: 3,
    status: "Suspended",
  },
];
