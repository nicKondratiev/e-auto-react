import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchCarsData } from "../../utils/FetchCarsData";

// util function
import DataFiltering from "../../utils/DataFiltering";
import Cars from "../pagination/Cars";
import Loading from "../feedback/Loading";

export type QueryParams = Record<string, string | number | null>;

const SearchResults = () => {
  // we get current url's params with this useSearchParams hook
  const [params] = useSearchParams();

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
    },
    {
      refetchOnWindowFocus: false,
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

  return (
    <div className="w-[800px]">
      {isLoading ? (
        <Loading color="darkOrange" type="spinningBubbles" />
      ) : (
        <Cars data={filtered} />
      )}
    </div>
  );
};

export default SearchResults;
