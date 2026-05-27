import {
  useRouteError,
  Link,
} from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center h-[70vh] gap-4">
      <h1 className="text-6xl font-bold">
        404
      </h1>

      <h2 className="text-3xl font-semibold">
        Page Not Found
      </h2>

      <p>
        Status: {error.status}
      </p>

      <p>
        Message: {error.statusText}
      </p>

      <Link to="/">
        <button className="bg-black text-white px-5 py-2 rounded-md">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;