import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-white">
        <div>
          <h1 className="text-9xl text-orange-600">404</h1>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Requested page</h1>
            <h1 className="text-xl">Not found</h1>
          </div>
        </div>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white duration-300 hover:bg-orange-700"
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};
export default ErrorPage;
