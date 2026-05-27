import { useRouteError, Link } from "react-router-dom";

function NotFound() {
  const error = useRouteError();

  return (
    <div>
      <h1>404 Error</h1>

      <h2>Page Not Found</h2>

      <p>
        Status: {error.status}
      </p>

      <p>
        Message: {error.statusText}
      </p>

      <Link to="/">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;