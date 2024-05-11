import "./Pagination.css";

import React from "react";

import { BiFirstPage, BiLastPage } from "react-icons/bi";

function Pagination({ pageIndex, setPageIndex }) {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => setPageIndex((prevIndex) => Math.max(prevIndex - 1, 1))}
        disabled={pageIndex === 1}
      >
        <BiFirstPage />
      </button>
      <span>Page {pageIndex}</span>
      <button
        className="pagination-button"
        onClick={() =>
          setPageIndex((prevIndex) =>
            Math.min(prevIndex + 1, Math.ceil(1302 / 20))
          )
        }
        disabled={pageIndex === 50}
      >
        <BiLastPage />
      </button>
    </div>
  );
}

export default Pagination;
