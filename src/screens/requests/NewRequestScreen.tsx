import { ChangeEventHandler, FormEvent, useState } from "react";
import ViewBar from "../../components/ViewBar";
import Input from "../../components/elements/Input";
import { createRequest } from "../../firebase/request.firebase";
import { Request } from "../../types";
import { notify } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function NewRequestScreen() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    notify("Creating Request");
    createRequest(data as Request).then(() => {
      notify("Blood Request Created");
      navigate("/admin/dashboard/request");
    });
  };

  const onChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section>
      <ViewBar
        name="Create Blood Request"
        description="Fill up fields to create a donation"
      />

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Input
          type="text"
          name="centerName"
          placeholder="Enter Center Name"
          required
          onChange={onChange}
        />
        <Input
          type="text"
          name="centerLocation"
          placeholder="Enter Center Location"
          required
          onChange={onChange}
        />
        <select
          name="bloodGroup"
          className={inputStyle}
          onChange={onChange}
          required
        >
          <option value="" selected disabled hidden>
            Choose Blood Group
          </option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>

        <Input
          type="number"
          name="packs"
          required
          placeholder="Packs"
          onChange={onChange}
          min={1}
        />
        <select
          name="urgent"
          className={inputStyle}
          onChange={onChange}
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
          required
        >
          <option value="" selected disabled hidden>
            Select Status{" "}
          </option>
          <option value="PENDING">PENDING</option>
          <option value="FULFILLED">FULFILLED</option>
        </select>

        <Input type="date" name="dueDate" onChange={onChange} required />
        <button className="bg-primary px-1 py-2 rounded-md text-center text-white font-bold hover:bg-dark">
          Create Request
        </button>
      </form>
    </section>
  );
}

const inputStyle =
  "block w-full rounded-md border-0 my-2 px-1.5 py-1.5 text-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-dark-overlay focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
