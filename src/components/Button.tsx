import useStore from "../store";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

type SearchParams = {
  paramName: string;
  paramValue: string;
}[];

const Button = () => {
  const navigate = useNavigate();
  const store = useStore();

  // we pass this url state to navigate as an argument
  const [url, setUrl] = useState<string>("");
  // resCount equals to the amount of cars on sale (by specific filters)
  const [resCount, setResCount] = useState<number>(0);

  // this function replaces empty spaces with dashes (to make string valid for url)
  const urlStringModifier = (value: string) => {
    return value.replace(" ", "-");
  };

  const searchParams: SearchParams = useMemo(() => {
    return [
      {
        paramName: "manu",
        paramValue: urlStringModifier(store.searchParams.manu),
      },
      {
        paramName: "model",
        paramValue: urlStringModifier(store.searchParams.model),
      },
      {
        paramName: "location",
        paramValue: urlStringModifier(store.searchParams.location),
      },
      {
        paramName: "custom",
        paramValue: urlStringModifier(String(store.searchParams.custom)),
      },
    ];
  }, [store.searchParams]);

  // this function checks if the searchParam item exists and pushes in the array if it does
  const routePusher = (
    routeParams: string[] = [],
    param: { paramName: string; paramValue: string }
  ) => {
    if (param.paramValue) {
      routeParams.push(`${param.paramName}=${param.paramValue}`);
    }
  };

  useEffect(() => {
    const routeParams: string[] = [];

    searchParams.map((param) => routePusher(routeParams, param));

    const fetchCars = async () => {
      const res = await axios.get(
        `http://localhost:4000/carsOnSale?${routeParams.join("&")}`
      );
      setResCount(res.data.length);
    };
    fetchCars();

    const urlQueryParams = `iyideba-manqanebi?${routeParams.join("&")}`;
    setUrl(urlQueryParams);
  }, [searchParams]);

  return (
    <div className="col-start-4 row-start-3">
      <button
        onClick={() => navigate(url)}
        className="w-2/3 rounded bg-orange-500 p-1"
      >
        Search ({resCount})
      </button>
    </div>
  );
};

export default Button;
