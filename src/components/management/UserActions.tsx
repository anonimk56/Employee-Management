import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddUserIcon from "../icons/AddUserIcon";
import ExportIcon from "../icons/ExportIcon";
import { UserRolesData, UserStatusData } from "../../utils/Constants";

function UserActions() {
  return (
    <Box
      sx={{
        width: "80%",
        mx: "auto", // centers the box horizontally
        mt: 0, // sits right below navbar
        backgroundColor: "#FFFFFF",
        border: "1px solid #F3F4F6",
        borderRadius: "0.75rem",
        boxShadow: "0px 1px 2px 0px #0000000D",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        p: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
        gap: "1rem",
      }}
    >
      {/* Left side — Search + Dropdowns */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.8rem",
          alignItems: "center",
          flex: "1 1 auto",
        }}
      >
        {/* Search Bar */}
        <TextField
          placeholder="Search users..."
          size="small"
          variant="outlined"
          sx={{
            minWidth: { xs: "100%", sm: "14rem", md: "18rem" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem",
              fontFamily: "Rubik",
              fontSize: "0.9rem",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#9CA3AF" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Roles Dropdown */}
        <TextField
          select
          size="small"
          defaultValue="All Roles"
          sx={{
            minWidth: { xs: "48%", sm: "10rem" },
            "& .MuiOutlinedInput-root": { borderRadius: "0.5rem" },
            fontFamily: "Rubik",
          }}
          SelectProps={{
            IconComponent: () => (
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#000",
                  mx: "0.3rem",
                  fontWeight: 500,
                }}
              >
                &gt;
              </Typography>
            ),
          }}
        >
          <MenuItem value="All Roles">All Roles</MenuItem>
          {UserRolesData.map((role) => (
            <MenuItem key={role.id} value={role.role}>
              {role.role}
            </MenuItem>
          ))}
        </TextField>

        {/* Status Dropdown */}
        <TextField
          select
          size="small"
          defaultValue="All Status"
          sx={{
            minWidth: { xs: "48%", sm: "10rem" },
            "& .MuiOutlinedInput-root": { borderRadius: "0.5rem" },
            fontFamily: "Rubik",
          }}
          SelectProps={{
            IconComponent: () => (
              <Typography
                sx={{
                  fontSize: "1rem",
                  color: "#000",
                  mx: "0.3rem",
                  fontWeight: 500,
                }}
              >
                &gt;
              </Typography>
            ),
          }}
        >
          <MenuItem value="All Status">All Status</MenuItem>
          {UserStatusData.map((status) => (
            <MenuItem key={status.id} value={status.status}>
              {status.status}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Right side — Buttons */}
      <Box
        sx={{
          display: "flex",
          gap: "0.8rem",
          alignItems: "center",
          justifyContent: "flex-end",
          flexShrink: 0,
        }}
      >
        {/* Add User Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6F2D7A",
            color: "#FFFFFF",
            textTransform: "none",
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: "0.95rem",
            borderRadius: "0.4rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            "&:hover": { backgroundColor: "#5B2464" },
          }}
        >
          <AddUserIcon />
          <Typography> Add User </Typography>
        </Button>

        {/* Export Button */}
        <Button
          variant="outlined"
          sx={{
            borderColor: "#D1D5DB",
            color: "#374151",
            textTransform: "none",
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: "0.95rem",
            borderRadius: "0.4rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            "&:hover": { borderColor: "#9CA3AF" },
          }}
        >
          <ExportIcon />
          <Typography> Export </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default UserActions;
