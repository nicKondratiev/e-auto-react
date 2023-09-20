type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <nav className="flex gap-5">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)}>Next</button>
    </nav>
  );
};

export default Pagination;
