import React from "react";

const Pagination = ({
  entriesPerPage,
  totalEntries,
  paginate,
  currentPage,
}) => {
  console.log("ghusgye");
  //   console.log("entriesperPage", entriesPerPage);
  //   console.log("totalENtries", totalEntries);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++)
    pageNumbers.push(i);

  //   console.log(pageNumbers);

  //   console.log("Current Page", currentPage);

  return (
    <>
      <nav>
        <ul className="pagination">
          <li key="Previous">
            <a onClick={() => paginate(currentPage - 1)} className="page-link">
              Prev
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={
                number === currentPage ? "page-item active " : "page-item"
              }
            >
              <a onClick={() => paginate(number)} className="page-link">
                {number}
              </a>
            </li>
          ))}
          <li key="Next">
            <a onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
