import axios from "axios";

// query params type imported form SearchResults.tsx
import { QueryParams } from "../components/SearchResults/SearchResults";

// function to build query parameters
export const buildQueryParams = (params: QueryParams) => {
  return (
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
};

// function to fetch car data
export const FetchCarsData = async (queryParams: QueryParams) => {
  const response = await axios.get(
    `http://localhost:4000/carsOnSale?${buildQueryParams(queryParams)}`
  );

  return response;
};
