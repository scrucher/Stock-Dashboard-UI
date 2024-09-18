import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Category,
  UserManagement,
  NavBar,
  SideBarComponent,
  Dashboard,
  Service,
  Unit,
  ProductManagement,
  Supplier,
  Client,
  StockDashboard,
  PreLoader,
} from "./Components";
import { UserHome } from "./Components/User";

// A wrapper component to use `useLocation` inside BrowserRouter
const Layout = () => {
  const location = useLocation();

  // Define paths where the sidebar and navbar should be hidden
  const hideSidebarAndNav = location.pathname.startsWith("/User");

  return (
    <div className="flex h-screen">
      {!hideSidebarAndNav && <SideBarComponent />}
      <div className="flex-1 flex flex-col">
        {!hideSidebarAndNav && <NavBar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Usr-Management" element={<UserManagement />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Unit" element={<Unit />} />
          <Route path="/Product" element={<ProductManagement />} />
          <Route path="/Supplier" element={<Supplier />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/Analytics" element={<StockDashboard />} />
          {/* User components */}
          <Route path="/User/Home" element={<UserHome />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with actual data fetching/loading logic)
    setTimeout(() => setIsLoading(false), 1000); // Adjust the timeout as needed
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <BrowserRouter basename="/">
      <Layout />
    </BrowserRouter>
  );
};

export default App;
