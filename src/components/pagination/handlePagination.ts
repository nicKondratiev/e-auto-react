import { Location } from "react-router-dom";
import { SetStateAction } from "react";

export const handlePagination = (
  page: number,
  setPage: React.Dispatch<SetStateAction<number>>,
  navigate: (url: string) => void,
  location: Location,
  params: URLSearchParams
) => {
  setPage(page);

  params.set("page", page.toString());

  const newURL = `${location.pathname}?${params.toString()}`;

  navigate(newURL);
};
