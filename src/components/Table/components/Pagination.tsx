import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { PropsPagination } from "../interfaces/interfaces";
import { ButtonPagination } from "./ButtonPagination";

import styles from "./componentStyles.module.css";

export const Pagination: React.FC<PropsPagination> = ({
  getCanNextPage,
  getCanPreviousPage,
  getPageCount,
  nextPage,
  previousPage,
  setPageIndex,
}) => {
  const prevBtn = getCanPreviousPage()
    ? {}
    : { background: "gray", color: "white" };
  const nextBtn = getCanNextPage()
    ? {}
    : { background: "gray", color: "white" };

  return (
    <div className={styles.table__content_buttons}>
      <ButtonPagination
        onActionBtn={() => setPageIndex(0)}
        Icon={<MdOutlineKeyboardDoubleArrowLeft />}
      />

      <ButtonPagination
        disabled={!getCanPreviousPage()}
        Icon={<IoIosArrowBack />}
        onActionBtn={() => previousPage()}
        style={prevBtn}
      />

      <ButtonPagination
        disabled={!getCanNextPage()}
        Icon={<IoIosArrowForward />}
        onActionBtn={() => nextPage()}
        style={nextBtn}
      />

      <ButtonPagination
        onActionBtn={() => setPageIndex(getPageCount() - 1)}
        Icon={<MdOutlineKeyboardDoubleArrowRight />}
      />
    </div>
  );
};
