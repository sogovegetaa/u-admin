import React from "react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className="pagination">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page == currentPage ? "bg-gray-200 px-3 py-1 rounded-lg m-1 text-xl" : "bg-transparent px-3 py-1 rounded-lg m-1 text-xl"}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
