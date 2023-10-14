import { useEffect, useRef, useState } from "react";
// import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// svgs;
import engineSvg from "./svgs/engine.svg";
import clutchSvg from "./svgs/clutch.svg";
import mileage from "./svgs/mileage.svg";
import steering from "./svgs/steering.svg";

// pages generator for pagination
import generatePages from "./generatePages";

// import car data type
import { CarType } from "../DataFiltering";

type PropTypes = {
  data: CarType[];
};

export default function Cars(props: PropTypes) {
  const [params] = useSearchParams();
  const location = useLocation();
  const { data } = props;

  // set the initial page based on url param
  const initialPage = Number(params.get("page")) || 1;
  const [page, setPage] = useState(initialPage);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPage(Number(params.get("page")));
  }, [params, data]);

  // how many items we want to see on a single page
  const pageSize = 10;
  const currentItems = data.slice((page - 1) * pageSize, page * pageSize);

  // this count variable equals to loaded imgs quantity
  let count = 0;

  const handlePageClick = async (val: number) => {
    setPage(val);
    setIsLoaded(false);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", val.toString());
    const newURL = `${location.pathname}?${searchParams.toString()}`;
    window.history.pushState(null, "", newURL);
  };

  // Handle browser back button
  window.onpopstate = function () {
    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get("page");
    const pageNum = pageParam ? parseInt(pageParam) : 1;
    setPage(pageNum);
  };

  // we need this pages array in the pagination section
  const pages = generatePages(page, 2);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0; // scroll to the top whenever the page changes
    }
  }, [page]);

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex h-full w-full flex-col justify-between gap-1 overflow-scroll rounded-lg bg-gray-200 px-4 py-2 text-black lg:h-5/6"
      >
        <div>
          {currentItems?.map((car: CarType, index: number) => (
            <div className="py-2" key={index}>
              <div className="flex h-full flex-col items-start gap-5 rounded-lg bg-white p-4 lg:flex-row">
                <div
                  className={
                    "h-[250px] w-full overflow-hidden rounded-lg bg-gray-400 lg:h-[180px] lg:w-[240px]"
                  }
                >
                  {!isLoaded && (
                    <div
                      style={{
                        height: "250px",
                        width: "100%",
                        backgroundColor: "#ddd",
                      }}
                    />
                  )}
                  <img
                    src={car.img}
                    className={`h-[250px] w-full bg-center bg-no-repeat object-cover lg:h-[180px] lg:w-[240px] ${
                      isLoaded ? "relative" : "hidden"
                    }`}
                    // if loaded imgs count equals to the length of currentItems on page it means all the pages have been loaded, so we can show them
                    onLoad={() => {
                      count += 1;
                      if (count === currentItems.length) {
                        setIsLoaded(true);
                      }
                    }}
                  />
                </div>

                <div className="flex w-full flex-col gap-5 lg:w-2/5">
                  <div className="flex gap-2">
                    <h1 className="font-semibold">
                      {car.manu} {car.model}
                    </h1>
                    <h1 className="text-gray-400">{car.year}</h1>
                  </div>
                  <div className="grid h-20 w-80 grid-cols-2 grid-rows-2 text-gray-700">
                    <div className="configs">
                      <img src={engineSvg} />
                      <p>{car.fuelType}</p>
                    </div>
                    <div className="configs">
                      <img src={clutchSvg} />
                      <p>{car.clutch}</p>
                    </div>
                    <div className="configs">
                      <img src={mileage} />
                      <p>{car.mileage}</p>
                    </div>
                    <div className="configs">
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

                <div className="flex h-full w-full flex-col items-start gap-2 lg:w-1/5 lg:items-end lg:gap-10">
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

        <div className="flex h-auto w-full items-center justify-center gap-1 rounded-lg bg-white py-5">
          <span
            className="paginate-item"
            onClick={page === 1 ? () => null : () => handlePageClick(page - 1)}
          >
            <ArrowBackIosIcon fontSize="small" />
          </span>
          <ul className="flex cursor-pointer gap-1">
            {pages.map((i) => (
              <span
                key={i}
                className={`${
                  i === page ? "bg-black text-white" : ""
                } paginate-item`}
                onClick={page === i ? () => null : () => handlePageClick(i)}
              >
                {i}
              </span>
            ))}
          </ul>
          <span
            className="paginate-item"
            onClick={() => handlePageClick(page + 1)}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </span>
        </div>
      </div>
    </>
  );
}
