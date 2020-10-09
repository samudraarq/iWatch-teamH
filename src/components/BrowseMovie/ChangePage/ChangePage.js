import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import styles from "./ChangePage.module.css";
import useWindowSize from "../../Hooks/useWindowResize"

const ChangePage = ({ pageChange, maxPage }) => {
  const [smallDevice, setSmallDevice] = useState(false)
  const [extSmallDevice, setExtSmallDevice] = useState(false)

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width < 600) {
      setSmallDevice(true);
    } else {
      setSmallDevice(false);
    }

    if (width < 350) {
      setExtSmallDevice(true)
    } else {
      setExtSmallDevice(false)
    }
  }, [width]);

  return (
    <div className={styles.paginationContainer}>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        pageCount={maxPage}
        marginPagesDisplayed={1}
        pageRangeDisplayed={extSmallDevice ? 0 : smallDevice ? 2 : 5 }
        onPageChange={pageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default ChangePage;
