import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="w-full h-screen grid place-content-center text-center">
      <h1 className="text-3xl my-4 font-bold text-primary">404</h1>
      <h2 className="text-xl my-2 font-bold text-primary">Page Not Found</h2>
      <Link to={".."} className="font-bold">
        Go Back
      </Link>
    </section>
  );
}
