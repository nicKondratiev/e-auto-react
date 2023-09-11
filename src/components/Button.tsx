import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  const manu = store.searchParams.manu.split(" ").join("-");
  const model = store.searchParams.model.split(" ").join("-");
  const location = store.searchParams.location.split(" ").join("-");

  // this function checks if the searchParam item exists and pushes in the array if it does
  const truthyChecker = (routeParams: string[] = [], str: string) => {
    if (str) {
      routeParams.push(str);
    }
  };

  const handleNavigate = () => {
    // we push route params to this array if their value is truthy
    const routeParams: string[] = [];

    truthyChecker(routeParams, manu);
    truthyChecker(routeParams, model);
    truthyChecker(routeParams, location);

    const url = `iyideba-manqanebi/${routeParams.join("/")}`;

    navigate(url);
  };

  return (
    <div className="col-start-4 row-start-3">
      <button
        onClick={handleNavigate}
        className="w-2/3 rounded bg-orange-500 p-1"
      >
        Search
      </button>
    </div>
  );
};

export default Button;
