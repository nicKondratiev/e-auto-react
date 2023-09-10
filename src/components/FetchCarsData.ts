import axios from "axios";

// function to build query parameters
export const buildQueryParams = (
  params: Record<string, string | undefined>
) => {
  return (
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
};

// function to fetch car data
export const FetchCarsData = (
  queryParams: Record<string, string | undefined>
) => {
  const response = axios.get(
    `http://localhost:4000/carsOnSale?${buildQueryParams(queryParams)}`
  );

  return response;
};