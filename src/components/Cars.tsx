import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

// import car data type
import { CarType } from "./DataFiltering";

type PropTypes = {
  data: CarType[];
};

export default function Cars(props: PropTypes) {
  const { data } = props;
  const [currentItems, setCurrentItems] = useState<CarType[]>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [params] = useSearchParams();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    params.set("page", (event.selected + 1).toString());
    const newURL = `${location.pathname}?${params.toString()}`;
    window.history.replaceState(null, "", newURL);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="h-[400px] w-[600px] overflow-scroll rounded-lg bg-white text-black">
        {currentItems?.map((car: CarType, index: number) => (
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
                <p>Price: {car.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        className="flex gap-2"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
