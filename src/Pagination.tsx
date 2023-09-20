import { useNavigate, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  const navigate = useNavigate();
  const location = useLocation(); // we need this obj to get current path
  const [params] = useSearchParams();

  const handlePagination = (newPage: number) => {
    setPage(newPage);

    // update the 'page' parameter in the search parameters
    params.set("page", newPage.toString());

    // Create a new URL with the updated search parameters
    const newURL = `${location.pathname}?${params.toString()}`;

    // navigate to new url
    navigate(newURL);
  };

  return (
    <nav className="flex gap-5">
      <button disabled={page === 1} onClick={() => handlePagination(page - 1)}>
        Prev
      </button>

      <button onClick={() => handlePagination(page + 1)}>Next</button>
    </nav>
  );
};

export default Pagination;
