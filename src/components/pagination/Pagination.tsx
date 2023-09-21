import { useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { handlePagination } from "./handlePagination";
import generatePages from "./generatePages";

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

  // pages to show before current page and after current page
  const pagesToShow = 3;

  const pages = generatePages(page, pagesToShow);

  return (
    <nav className="flex gap-5">
      <button disabled={page === 1} onClick={() => paginate(page - 1)}>
        Prev
      </button>
      <ul className="flex cursor-pointer gap-1">
        {pages.map((i) => (
          <span
            key={i}
            className={i === page ? "text-orange-500" : ""}
            onClick={() => paginate(i)}
          >
            {i}
          </span>
        ))}
      </ul>
      <button onClick={() => paginate(page + 1)}>Next</button>
    </nav>
  );
};

export default Pagination;
