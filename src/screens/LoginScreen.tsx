import Input from "../components/elements/Input";
import Icon from "../assets/icon.png";
import { FormEvent, useState } from "react";
import {
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function LoginScreen() {
  type LoginData = {
    email: string;
    password: string;
  };

  const navigate = useNavigate();
  const [data, setData] = useState<LoginData>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    login();
  };

  const onChange = (event: HTMLInputElement) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const login = () => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
          setLoading(false);
          setTimeout(() => navigate("/admin/dashboard"), 500);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <div className="flex min-h-full my-auto flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto max-h-10 w-auto" src={Icon} alt="Lifeflow" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <Input
                name="email"
                type="email"
                autocomplete="password"
                required={true}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <Input
                name="password"
                type="password"
                autocomplete="password"
                required={true}
                onChange={onChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? "..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
