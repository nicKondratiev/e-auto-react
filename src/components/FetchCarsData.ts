import axios from "axios";

// function to build query parameters
export const buildQueryParams = (params: Record<string, string | null>) => {
  return (
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join("&")
  );
};

// function to fetch car data
export const FetchCarsData = (queryParams: Record<string, string | null>) => {
  console.log(buildQueryParams(queryParams));
  const response = axios.get(
    `http://localhost:4000/carsOnSale?${buildQueryParams(
      queryParams
    )}&_limit=10`
  );

  return response;
};
