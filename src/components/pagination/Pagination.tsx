import { useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { handlePagination } from "./handlePagination";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation(); // we need this obj to get current path
  const [params] = useSearchParams();

  const paginate = (newPage: number) => {
    handlePagination(newPage, setPage, navigate, location, params);
  };

  // const handlePagination = (newPage: number) => {
  //   setPage(newPage);

  //   // update the 'page' parameter in the search parameters
  //   params.set("page", newPage.toString());

  //   // Create a new URL with the updated search parameters
  //   const newURL = `${location.pathname}?${params.toString()}`;

  //   // navigate to new url
  //   navigate(newURL);
  // };

  // pages to show before current page and after current page
  const pagesToShow = 3;

  // calculate the start and end page numbers
  let startPage = Math.max(1, page - pagesToShow);
  let endPage = page + pagesToShow;

  // adjust the range to maintain a consistent number of pages
  const pageCount = endPage - startPage + 1;
  if (pageCount < pagesToShow * 2) {
    if (startPage === 1) {
      endPage = endPage + pagesToShow * 2 - pageCount;
    } else {
      startPage = Math.max(1, startPage - (pagesToShow * 2 - pageCount));
    }
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <span
        key={i}
        className={i === page ? "text-orange-500" : ""}
        onClick={() => paginate(i)}
        // onClick={() => handlePagination(i)}
      >
        {i}
      </span>
    );
  }

  console.log(page);

  return (
    <nav className="flex gap-5">
      <button disabled={page === 1} onClick={() => paginate(page - 1)}>
        {/* <button disabled={page === 1} onClick={() => handlePagination(page - 1)}> */}
        Prev
      </button>
      <ul className="flex cursor-pointer gap-1">{pages}</ul>
      <button onClick={() => paginate(page + 1)}>Next</button>
      {/* <button onClick={() => handlePagination(page + 1)}>Next</button> */}
    </nav>
  );
};

export default Pagination;
