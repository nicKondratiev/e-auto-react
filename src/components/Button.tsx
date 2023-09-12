import useStore from "../store";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  // this function replaces empty spaces with dashes (to make string valid for url)
  const urlStringModifier = (value: string) => {
    return value.replace(" ", "-");
  };

  const manu = {
    paramName: "manu",
    url: urlStringModifier(store.searchParams.manu),
  };
  const model = {
    paramName: "model",
    url: urlStringModifier(store.searchParams.model),
  };
  const location = {
    paramName: "location",
    url: urlStringModifier(store.searchParams.location),
  };

  // this function checks if the searchParam item exists and pushes in the array if it does
  const routePusher = (
    routeParams: string[] = [],
    str: { paramName: string; url: string }
  ) => {
    if (str.url) {
      routeParams.push(`${str.paramName}=${str.url}`);
      // routeParams.push(str);
    }
  };

  const handleNavigate = () => {
    // we push route params to this array if their value is truthy
    const routeParams: string[] = [];

    routePusher(routeParams, manu);
    routePusher(routeParams, model);
    routePusher(routeParams, location);

    const url = `iyideba-manqanebi?${routeParams.join("&")}`;
    // const url = `iyideba-manqanebi?manu=${manu}&?model=${model}&?location=${location}`;
    // const url = `iyideba-manqanebi/${routeParams.join("/")}`;

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
