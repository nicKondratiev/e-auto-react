import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import DataFiltering from "../DataFiltering";
import { FetchCarsData, buildQueryParams } from "../FetchCarsData";

type SearchParams = Record<string, string | number | null>;

const SearchButton = () => {
  const navigate = useNavigate();
  const store = useStore();

  // we pass this url state to navigate as an argument
  const [url, setUrl] = useState<string>("");
  // resCount equals to the amount of cars on sale (by specific filters)
  const [resCount, setResCount] = useState<number>(0);

  // this function replaces empty spaces with dashes (to make string valid for url)
  const urlStringModifier = (value: string | number) => {
    if (typeof value === "string") {
      return value.replace(" ", "-");
    } else if (typeof value === "number") {
      return value;
    } else {
      return "";
    }
  };

  const searchParams: SearchParams = useMemo(() => {
    return {
      manu: urlStringModifier(store.searchParams.manu),
      model: urlStringModifier(store.searchParams.model),
      location: urlStringModifier(store.searchParams.location),
      custom: urlStringModifier(store.searchParams.custom),
      yearFrom: urlStringModifier(store.searchParams.year.from),
      yearTo: urlStringModifier(store.searchParams.year.to),
      priceFrom: urlStringModifier(store.searchParams.price.from),
      priceTo: urlStringModifier(store.searchParams.price.to),
      fuelType: urlStringModifier(store.searchParams.fuelType),
      page: "1",
    };
  }, [store.searchParams]);

  const lowerYearLimit = store.searchParams.year.from || 0;
  const upperYearLimit = store.searchParams.year.to || 100000;
  const lowerPriceLimit = store.searchParams.price.from || 0;
  const upperPriceLimit = store.searchParams.price.to || 100000;

  useEffect(() => {
    const fetchCars = async () => {
      const res = await FetchCarsData(searchParams);

      const filteredData = DataFiltering(
        res.data,
        lowerYearLimit,
        upperYearLimit,
        lowerPriceLimit,
        upperPriceLimit
      );

      setResCount(filteredData.length);
    };

    fetchCars();
    const urlQueryParams = `iyideba-manqanebi?${buildQueryParams(
      searchParams
    )}`;
    setUrl(urlQueryParams);
  }, [
    store.searchParams,
    searchParams,
    lowerPriceLimit,
    upperPriceLimit,
    lowerYearLimit,
    upperYearLimit,
  ]);

  return (
    <div className="col-start-4 row-start-2">
      <button
        onClick={() => navigate(url)}
        className="h-[50px] w-[180px] rounded-lg bg-[#FC4900] p-1 text-sm text-white hover:bg-[#FC3900]"
      >
        Search ({resCount})
      </button>
    </div>
  );
};

export default SearchButton;
