import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";

const Sidebar = () => (
  <div className="sidebar">
    <h2 className="sidebar-title">HyGo Admin</h2>
<NavLink to="/admin/dashboard" className="sidebar-link">Admin Dashboard</NavLink>
<NavLink to="/admin/teachers" className="sidebar-link">Manage Teachers</NavLink>
<NavLink to="/admin/students" className="sidebar-link">Manage Students</NavLink>
<NavLink to="/admin/parents" className="sidebar-link">Manage Parents</NavLink>
<NavLink to="/admin/admins" className="sidebar-link">Manage Admins</NavLink>
<NavLink to="/admin/classes" className="sidebar-link">Manage Classes</NavLink>
<NavLink to="/admin/subjects" className="sidebar-link">Manage Subjects</NavLink>
<NavLink to="/admin/attendance" className="sidebar-link">Manage Attendance</NavLink>
<NavLink to="/admin/results" className="sidebar-link">Manage Results</NavLink>
<NavLink to="/admin/communication" className="sidebar-link">Communication</NavLink>
</div>
);

export default Sidebar;
