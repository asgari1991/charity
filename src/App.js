import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import PublicLayout, {
  LandingHome,
} from "./Components/landing/PublicLayout";
import About from "./landing/about/About";
import Cooperation from "./landing/Cooperation";
import Donation from "./landing/Donation";
import Events from "./landing/events/Events";
import Reports from "./landing/Reports";
import Shop from "./landing/Shop";

function App() {
  const token = localStorage.getItem("token");

  const routes = [
    {
      path: "/",
      element: token ? <Navigate to="/dashboard" replace /> : <PublicLayout />,
      children: [
        { index: true, element: <LandingHome /> },
        { path: "about-us", element: <About /> },
        { path: "cooperation", element: <Cooperation /> },
        { path: "donation", element: <Donation /> },
        { path: "events", element: <Events /> },
        { path: "reports", element: <Reports /> },
        { path: "shop", element: <Shop /> },
        
      ],
    },
    {
      path: "/dashboard/*",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ];

  const router = useRoutes(routes);

  return <div>{router}</div>;
}

export default App;
