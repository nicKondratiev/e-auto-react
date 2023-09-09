import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  const manu = store.searchParams.manu.split(" ").join("-");
  const model = store.searchParams.model.split(" ").join("-");
  const location = store.searchParams.location.split(" ").join("-");

  const handleNavigate = () => {
    // we push route params to this array if their value is truthy
    const routeParams = [];

    if (manu) {
      routeParams.push(manu);
    }

    if (model) {
      routeParams.push(model);
    }

    if (location) {
      routeParams.push(location);
    }

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
