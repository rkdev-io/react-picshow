import React, { useState } from "react";
import { useEffect } from "react";

export default function Pagination({ pagination, setPagination }) {
  const [pages, setPages] = useState([]);
   
  useEffect(() => {
    setPages(Array.from({ length: pagination.totalPage }, (_, i) => i + 1));
  }, [pagination.totalPage]);

  return (
    <div className="flex flex-wrap items-center justify-center my-6">
      <button
        onClick={() =>
          pagination.page > 1 &&
          setPagination({ ...pagination, page: pagination.page - 1 })
        }
        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded border border-[rgba(0,0,0,0.75)] hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
      >
        Previous
      </button>
      <span className="mx-2">
        {pages.map((val) => {
          if (
            (val >= pagination.page && val <= pagination.page + 2) ||
            val === pagination.totalPage ||
            val === 1
          ) {
            return (
              <span key={val}>
                <span>{val === pagination.totalPage ? " ... " : ""}</span>
                <span
                  key={val}
                  onClick={() => setPagination({ ...pagination, page: val })}
                  className={`bg-slate-300 px-2 rounded mx-1 cursor-pointer ${
                    pagination.page === val ? "bg-slate-600 text-white" : ""
                  }`}
                >
                  {val}
                </span>
              </span>
            );
          }
          if (val === 2) {
            return (
              <span key={val}>
                {{ ...pagination, page: pagination.page - 1 } ? " ... " : ""}
              </span>
            );
          } else return null;
        })}
      </span>
      <button
        onClick={() =>
          pagination.page < pagination.totalPage &&
          setPagination({ ...pagination, page: pagination.page + 1 })
        }
        className="inline-flex items-center px-4 py-2 text-sm font-medium transition-colors rounded border border-[rgba(0,0,0,0.75)] hover:bg-[rgba(0,0,0,0.75)] hover:text-white hover:border-[rgba(0,0,0,0.75)]"
      >
        Next
      </button>
    </div>
  );
}
