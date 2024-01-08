import { useEffect, useState } from "react";
import RequestCard from "../../components/RequestCard";
import ViewBar from "../../components/ViewBar";
import { getRequests } from "../../firebase/request.firebase";
import { Request } from "../../types";
import Spinner from "../../components/Spinner";

export default function RequestScreen() {
  const [requests, setRequests] = useState<Array<Request>>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRequests().then((docs) => {
      setRequests(docs);
      setLoading(false);
    });
  }, []);
  return (
    <section>
      <div className="flex flex-col">
        <ViewBar
          name="Request"
          description="Here are all blood requests"
          link="/admin/dashboard/request/new"
        />
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-3 gap-3">
          {requests.map((request) => (
            <RequestCard request={request} />
          ))}
        </section>
      )}
    </section>
  );
}
