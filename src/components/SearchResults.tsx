import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchCarsData } from "./FetchCarsData";

// util function
import DataFiltering from "./DataFiltering";
import Cars from "./Cars";

export type QueryParams = Record<string, string | number | null>;

const SearchResults = () => {
  // we get current url's params with this useSearchParams hook
  const [params] = useSearchParams();
  // const [page, setPage] = useState<number>(1);

  // we create this obj to iterate over it in buildQueryParams func
  const queryParams: QueryParams = useMemo(() => {
    return {
      manu: params.get("manu"),
      model: params.get("model"),
      location: params.get("location"),
      custom: params.get("custom"),
      fuelType: params.get("fuelType"),
    };
  }, [params]);

  const { isLoading, error, data } = useQuery(
    ["searchResults", queryParams],
    () => {
      return FetchCarsData(queryParams);
    }
  );

  if (error) console.log(error);

  const lowerYearLimit = Number(params.get("yearFrom")) || 0;
  const upperYearLimit = Number(params.get("yearTo")) || 100000;
  const lowerPriceLimit = Number(params.get("priceFrom")) || 0;
  const upperPriceLimit = Number(params.get("priceTo")) || 100000;

  const carsData = data?.data;
  const filtered = DataFiltering(
    carsData,
    lowerYearLimit,
    upperYearLimit,
    lowerPriceLimit,
    upperPriceLimit
  );

  console.log(filtered);

  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      <Cars data={filtered} />
    </div>
  );
};

export default SearchResults;
