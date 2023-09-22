import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import { FetchCarsData } from "./FetchCarsData";
import Pagination from "./pagination/Pagination";

type CarData = {
  manu: string;
  model: string;
  location: string;
  img: string;
};

export type QueryParams = Record<string, string | number | null>;

const SearchResults = () => {
  // we get current url's params with this useSearchParams hook
  const [params] = useSearchParams();
  const [page, setPage] = useState<number>(1);

  console.log(page);

  // we create this obj to iterate over it in buildQueryParams func
  const queryParams: QueryParams = useMemo(() => {
    return {
      manu: params.get("manu"),
      model: params.get("model"),
      location: params.get("location"),
      custom: params.get("custom"),
      _page: params.get("page"),
      _limit: "10",
    };
  }, [params]);

  const { isLoading, error, data } = useQuery(
    ["searchResults", queryParams],
    () => {
      return FetchCarsData(queryParams);
    }
  );

  if (error) console.log(error);

  return (
    <div>
      <div className="h-[400px] w-[600px] overflow-scroll rounded-lg bg-white text-black">
        {isLoading && <h1>Loading</h1>}
        {data?.data?.map((car: CarData, index: number) => (
          <div key={index}>
            <div className="flex items-start gap-5">
              <div
                className={`h-64 w-80 bg-contain bg-center bg-no-repeat`}
                style={{
                  backgroundImage: `url(${car.img})`,
                }}
              />
              <div>
                <h1>Manufacturer: {car.manu}</h1>
                <p>Model: {car.model}</p>
                <p>Location: {car.location}</p>
              </div>
            </div>
          </div>
        ))}
        <Pagination
          // incase user removes "page" query param from url we still want to pass default page value which is 1
          page={Number(params.get("page") ? params.get("page") : page)}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export default SearchResults;
