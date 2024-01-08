import { useEffect } from "react";
import { Request } from "../types";
import RequestCardItem from "./RequestCardItem";
import Button from "./elements/Button";

interface RequestCardProps {
  request?: Request;
}

export default function RequestCard({ request }: RequestCardProps) {
  const { id, centerName, centerLocation, status, urgent, packs, dueDate } =
    request as Request;
  const deleteRequest = () => {
    alert("Deleting Request");
  };

  useEffect(() => {
    console.log(request);
  }, []);
  return (
    <div className="col-auto flex flex-col gap-2 h-auto rounded-md border-[1px] border-primary px-2 py-3">
      <h3 className="text-xl font-bold">{centerName}</h3>

      <RequestCardItem name={"Location"} value={centerLocation.toString()} />
      <RequestCardItem name={"Packs"} value={packs} />
      <RequestCardItem name={"Urgent"} value={urgent ? "Emergency" : "Mild"} />
      <RequestCardItem name={"Due Date"} value={dueDate.toString()} />
      <RequestCardItem name={"Status"} value={status} />
      <div className="flex gap-2 my-2 self-end">
        <a href={`/admin/dashboard/request/edit/${id}`}>
          <Button name="Edit" className="bg-black text-white" />
        </a>
        <Button
          name="Delete"
          className="border-[2px] border-white"
          onClick={deleteRequest}
        />{" "}
      </div>
    </div>
  );
}
