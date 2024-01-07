import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./screens/Dashboard";
import RequestScreen from "./screens/requests/RequestScreen";
import EditRequestScreen from "./screens/requests/EditRequestScreen";

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
            path="/admin/dashboard/request/edit"
            element={<EditRequestScreen />}
          />
          <Route
            path="/admin/dashboard/request/new"
            element={<EditRequestScreen />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
