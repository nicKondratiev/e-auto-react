import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import "./pagination.css";

// svgs
import engineSvg from "./svgs/engine.svg";
import clutchSvg from "./svgs/clutch.svg";
import mileage from "./svgs/mileage.svg";
import steering from "./svgs/steering.svg";

// import car data type
import { CarType } from "../DataFiltering";

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
  const [isLoaded, setIsLoaded] = useState(false);

  // this count variable equals to loaded imgs quantity
  let count = 0;

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
    // set is loaded to false, whenever we change the page
    setIsLoaded(false);
  };

  return (
    <>
      <div className="flex  h-[400px] w-full flex-col gap-1 overflow-scroll rounded-lg bg-gray-200 text-black">
        {currentItems?.map((car: CarType, index: number) => (
          <div className="px-4 py-2" key={index}>
            <div className="items flex h-full items-start gap-5 rounded-lg bg-white p-4">
              <div
                className={
                  "h-auto w-auto overflow-hidden rounded-lg bg-gray-300"
                }
              >
                <img
                  src={car.img}
                  className={`h-[180px] w-[240px] bg-center bg-no-repeat object-cover ${
                    isLoaded ? "relative" : "hidden"
                  }`}
                  // if loaded imgs count equals to the length of currentItmes on page it means all the pages have been loaded, so we can show them
                  onLoad={() => {
                    count += 1;
                    if (count === currentItems.length) {
                      setIsLoaded(true);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <h1 className="font-semibold">
                    {car.manu} {car.model}
                  </h1>
                  <h1 className="text-gray-400">{car.year}</h1>
                </div>
                <div className="grid h-20 w-80 grid-cols-2 grid-rows-2 text-gray-700">
                  <div className="flex items-center gap-2 text-sm font-normal">
                    <img src={engineSvg} />
                    <p>{car.fuelType}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-normal">
                    <img src={clutchSvg} />
                    <p>{car.clutch}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-normal">
                    <img src={mileage} />
                    <p>{car.mileage}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-normal">
                    <img src={steering} />
                    <p>{car.steering}</p>
                  </div>
                </div>
                <div
                  className={`flex h-5 w-16 items-center justify-center rounded-xl ${
                    car.listingType === "S-VIP"
                      ? "bg-[#FC4100]"
                      : car.listingType === "VIP"
                      ? "bg-[#FCBF00]"
                      : "bg-green-500"
                  }`}
                >
                  <p className="text-xs font-bold text-white">
                    {car.listingType}
                  </p>
                </div>
              </div>

              <div className="flex h-full flex-col gap-10">
                <div className="flex gap-8 text-xs">
                  <p>{car.location}</p>
                  <p className=" text-green-500">
                    {car.custom === 1 ? "Cleared" : "Duty-free"}
                  </p>
                </div>
                <div className="text-end">
                  <p className="text-xl font-medium">{car.price} $</p>
                </div>
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
