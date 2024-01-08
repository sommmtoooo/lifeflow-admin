import { useEffect, useState } from "react";
import DashboardCard from "../components/DashboardCard";
import ViewBar from "../components/ViewBar";
import { getDonors } from "../firebase/user.firebase";
import { getRequests } from "../firebase/request.firebase";

export default function Dashboard() {
  const [donors, setDonors] = useState(0);
  const [bloodRequests, setBloodRequests] = useState(0);
  useEffect(() => {
    getRequests().then((requests) => {
      setBloodRequests(requests.length);
    });
    getDonors().then((donors) => {
      console.log(donors);
      setDonors(donors?.length);
    });
  }, []);
  return (
    <section>
      <ViewBar name="Dashboard" description="Lifeflow overview" />
      <DashboardCard title="Blood Requests" count={bloodRequests} />
      <DashboardCard title="Donors" count={donors} />
      <DashboardCard title="Donations" count={300} />
      <DashboardCard title="Pending Donations" count={300} />
      <DashboardCard title="Issues" count={300} />
    </section>
  );
}
