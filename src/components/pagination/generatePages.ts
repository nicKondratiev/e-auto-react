const generatePages = (page: number, pagesToShow: number) => {
  // we use Math.max because if (page - pagesToShow) is negative then we can't display it
  let startPage = Math.max(1, page - pagesToShow);
  let endPage = page + pagesToShow;

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
    pages.push(i);
  }

  return pages;
};

export default generatePages;
