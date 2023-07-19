import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./sideBar.module.css";

export interface SubNamesProp {
  nameSub: string;
  IconSub: JSX.Element;
}

interface Props {
  Icon: JSX.Element;
  name: string;
  subNames: SubNamesProp[];
  openSubTitle: boolean;
  setOpenSubTitle: (value: boolean) => void;
}

export const SideItem = ({
  Icon,
  name,
  subNames,
  openSubTitle,
  setOpenSubTitle,
}: Props) => {
  return (
    <li
      className={styles.sidebar__item}
      onClick={subNames && (() => setOpenSubTitle(!openSubTitle))}
    >
      <span className={styles.sidebar__inside_item}>
        {Icon}

        <p className={styles.sidebar__item_title}>{name}</p>
      </span>

      {subNames && (
        <>{openSubTitle ? <MdOutlineKeyboardArrowDown /> : <IoIosArrowUp />}</>
      )}
    </li>
  );
};
