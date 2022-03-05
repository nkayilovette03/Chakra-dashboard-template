import React, { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;