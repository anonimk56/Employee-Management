import { useMemo, useState } from "react";
import DashboardSidebar from "./components/sidebar/Sidebar";
import Dashboard from "./screens/Dashboard";
import UserManagement from "./screens/UserManagement";
import RolePermission from "./screens/RolePermission";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [selectedId, setSelectedId] = useState<number>(1);

  const { screenName, content } = useMemo(() => {
    switch (selectedId) {
      case 1:
        return { screenName: "Dashboard", content: <Dashboard /> };
      case 2:
        return { screenName: "User Management", content: <UserManagement /> };
      case 3:
        return { screenName: "Role & Permission", content: <RolePermission /> };
      default:
        return { screenName: "Dashboard", content: <Dashboard /> };
    }
  }, [selectedId]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      {/* Sidebar */}
      <DashboardSidebar onSelect={setSelectedId} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          marginTop: "0px",
        }}
      >
        <Navbar
          screen={
            screenName as "Dashboard" | "User Management" | "Role & Permission"
          }
          userCount={45}
          roleCount={8}
        />

        {/* Screen content below navbar */}
        <div
          style={{
            flex: 1,
            height: "100vh",
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;
