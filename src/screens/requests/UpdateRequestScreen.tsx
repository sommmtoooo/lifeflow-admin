import { ChangeEventHandler, FormEvent, useEffect, useState } from "react";
import ViewBar from "../../components/ViewBar";
import Input from "../../components/elements/Input";
import { Request } from "../../types";
import { notify } from "../../utils";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest, updateRequest } from "../../firebase/request.firebase";
import Spinner from "../../components/Spinner";

export default function UpdateRequestScreen() {
  const [data, setData] = useState<Request | null>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    updateRequest(id + "", data as Request).then((res) => {
      if (res) {
        notify("Request Updated");
        navigate("/admin/dashboard/request");
      } else {
        notify("Update Failed");
      }
    });
  };

  const onChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    console.trace(id);
    getRequest(id + "")
      .then((request) => {
        setData(request);
        setLoading(false);
      })
      .catch(() => {
        notify("Something went wrong");
        navigate("/admin/dashboard/request");
      });
  }, []);

  return (
    <section>
      <ViewBar name="Update Blood Request" />

      {loading ? (
        <Spinner />
      ) : (
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Input
            type="text"
            name="centerName"
            placeholder="Enter Center Name"
            value={data?.centerName}
            required
            onChange={onChange}
          />
          <Input
            type="text"
            name="centerLocation"
            placeholder="Enter Center Location"
            value={data?.centerLocation}
            required
            onChange={onChange}
          />
          <Input
            type="number"
            name="packs"
            required
            placeholder="Packs"
            value={data?.packs}
            onChange={onChange}
            min={1}
          />
          <select
            name="urgent"
            className={inputStyle}
            onChange={onChange}
            value={data?.urgent}
            required
          >
            <option value="" selected disabled hidden>
              Select Urgency
            </option>
            <option value="MILD">MILD</option>
            <option value="EMERGENCY">EMERGENCY</option>
          </select>
          <select
            name="status"
            className={inputStyle}
            onChange={onChange}
            value={data?.status}
            required
          >
            <option value="" selected disabled hidden>
              Select Status{" "}
            </option>
            <option value="PENDING">PENDING</option>
            <option value="FULFILLED">FULFILLED</option>
          </select>

          <Input
            type="date"
            name="dueDate"
            value={data?.dueDate}
            onChange={onChange}
            required
          />
          <button className="bg-primary px-1 py-2 rounded-md text-center text-white font-bold hover:bg-dark">
            Update
          </button>
        </form>
      )}
    </section>
  );
}

const inputStyle =
  "block w-full rounded-md border-0 my-2 px-1.5 py-1.5 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark-overlay focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
