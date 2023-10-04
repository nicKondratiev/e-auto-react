import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import "./pagination.css";

// import car data type
import { CarType } from "./DataFiltering";

type PropTypes = {
  data: CarType[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Cars(props: PropTypes) {
  const { data, page, setPage } = props;
  const [currentItems, setCurrentItems] = useState<CarType[]>();
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 10;
  const [params] = useSearchParams();

  useEffect(() => {
    const newOffset = (page - 1) * itemsPerPage;
    setCurrentItems(data?.slice(newOffset, newOffset + itemsPerPage));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [page, data, itemsPerPage]);

  useEffect(() => {
    const newPage = Number(params.get("page")) || 1;
    setPage(newPage);
  }, [params, setPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    params.set("page", newPage.toString());
    const newURL = `${location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newURL);
    setPage(newPage);
  };

  return (
    <>
      <div className="h-[400px] w-[600px] overflow-scroll rounded-lg bg-white text-black">
        {currentItems?.map((car: CarType, index: number) => (
          <div key={index}>
            <div className="flex items-start gap-5">
              <div className="h-60 w-80">
                <img
                  src={car.img}
                  className={`h-full w-full bg-center bg-no-repeat object-cover`}
                  loading="lazy"
                />
              </div>
              <div>
                <h1>Manufacturer: {car.manu}</h1>
                <p>Model: {car.model}</p>
                <p>Location: {car.location}</p>
                <p>Price: {car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        activeClassName="item active"
        className="flex gap-2"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        initialPage={page - 1} // Set the initial page
      />
    </>
  );
}
