import React from "react";
import Sidebar from "../components/Admin/Sidebar";
import "../components/Admin/Admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="admin-content">
        <h2 className="page-title">Admin Dashboard</h2>

        <p className="welcome-text">Welcome, Administrator</p>
        <p className="instruction-text">
          Manage your school data and monitor activities.
        </p>

        <div className="cards">
          <div className="card">
            <h4>Total Students</h4>
            <p className="count">320</p>
          </div>

          <div className="card">
            <h4>Total Teachers</h4>
            <p className="count">25</p>
          </div>

          <div className="card">
            <h4>Attendance Today</h4>
            <p className="count">94%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
