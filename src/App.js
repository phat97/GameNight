import "./style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Dashboard } from "./components/Dashboard";

export const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};
