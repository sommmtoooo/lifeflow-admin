import { Outlet } from "react-router-dom";
import NavLink from "../components/NavLink";
import { useEffect, useState } from "react";
import { getAdmin } from "../firebase/user.firebase";

export default function DashboardLayout() {
  const [username, setUsername] = useState("Manager");
  useEffect(() => {
    getAdmin().then((data) => {
      setUsername(data?.username);
    });
  }, []);
  return (
    <main className="relative w-screen grid grid-cols-5 gap-8">
      <aside className="bg-primary p-3 fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <a>
          <h1 className="text-2xl text-white font-bold mb-8 py-5 border-b-2 border-b-overlay">
            Lifeflow
          </h1>
        </a>
        <ul className="flex flex-col">
          <NavLink name="Dashboard" />
          <NavLink name="Blood Requests" link="/request" />
          <NavLink name="Notification" link="/notifications" />
          <NavLink name="Donations" link="/donations" />
        </ul>

        <div className="absolute left-0 bottom-0 w-full px-2 py-4 bg-dark">
          <span className="text-white">Welcome,&nbsp;{`${username}`}</span>
        </div>
      </aside>
      <section className="w-full p-4 sm:ml-64">
        <div className="p-4">
          <Outlet />
        </div>
      </section>
    </main>
  );
}
