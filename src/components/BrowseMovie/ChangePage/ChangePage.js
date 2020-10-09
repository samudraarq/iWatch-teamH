import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import styles from "./ChangePage.module.css";
import useWindowSize from "../../Hooks/useWindowResize"

const ChangePage = ({ pageChange, maxPage }) => {
  const [smallDevice, setSmallDevice] = useState(false)

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }
  }, [width]);

  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={maxPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={smallDevice ? 2 : 5 }
        onPageChange={pageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default ChangePage;
