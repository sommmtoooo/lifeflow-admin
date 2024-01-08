import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../components/SideNavbar";
import { useEffect } from "react";
import { auth } from "../firebase";

export default function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/");
      }
    });
  }, []);
  return (
    <main className="relative">
      <SideNav />
      <section className="p-4 sm:ml-64">
        <div className="p-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
