import { useRouteError } from "react-router-dom";

type ErrorPage = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorPage;

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center align-middle h-[100vh]"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
