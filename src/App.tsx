import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

import DashboardLayout from "./layouts/DashboardLayout";

import LoginScreen from "./screens/LoginScreen";
import Dashboard from "./screens/Dashboard";
import RequestScreen from "./screens/requests/RequestScreen";
import NewRequestScreen from "./screens/requests/NewRequestScreen";
import UpdateRequestScreen from "./screens/requests/UpdateRequestScreen";
import NotFound from "./screens/NotFound";

export default function App() {
  initializeApp(firebaseConfig);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/admin/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/dashboard/request" element={<RequestScreen />} />
          <Route
            path="/admin/dashboard/request/new"
            element={<NewRequestScreen />}
          />
          <Route
            path="/admin/dashboard/request/edit/:id"
            element={<UpdateRequestScreen />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
