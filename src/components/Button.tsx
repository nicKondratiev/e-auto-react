import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  // this function replaces empty spaces with dashes (to make string valid for url)
  const urlStringModifier = (value: string) => {
    return value.replace(" ", "-");
  };

  const manu = urlStringModifier(store.searchParams.manu);
  const model = urlStringModifier(store.searchParams.model);
  const location = urlStringModifier(store.searchParams.location);

  // this function checks if the searchParam item exists and pushes in the array if it does
  const routePusher = (routeParams: string[] = [], str: string) => {
    if (str) {
      routeParams.push(str);
    }
  };

  const handleNavigate = () => {
    // we push route params to this array if their value is truthy
    const routeParams: string[] = [];

    routePusher(routeParams, manu);
    routePusher(routeParams, model);
    routePusher(routeParams, location);

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
