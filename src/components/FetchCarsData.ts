import axios from "axios";

// query params type imported form SearchResults.tsx
import { QueryParams } from "./SearchResults";

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
export const FetchCarsData = (queryParams: QueryParams) => {
  const response = axios.get(
    `http://localhost:4000/carsOnSale?${buildQueryParams(queryParams)}`
  );

  return response;
};
