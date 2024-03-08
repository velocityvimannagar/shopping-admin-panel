import { Paper } from "@mui/material";
import "./Dashboard.css";

export function DashboardCard({ heading, value, icon }) {
  return (
    <Paper className="dashboard-card p-2 px-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column justify-content-center">
          <div className="dashboard-card-heading">{heading}</div>
          <h5>${value}</h5>
        </div>
        <div className="dashboard-card-icon">{icon}</div>
      </div>
    </Paper>
  );
}
