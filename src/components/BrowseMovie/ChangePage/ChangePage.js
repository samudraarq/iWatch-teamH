import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./ChangePage.module.css";

const ChangePage = ({ pageChange, maxPage }) => {
  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={maxPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={pageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default ChangePage;
