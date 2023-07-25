import { useNavigate } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PropsSideBar } from "../interfaces/interfaces";

import styles from "./sideBar.module.css";

export const SideItem: React.FC<PropsSideBar> = ({
  onCloseSideBar,
  openSubTitle,
  setOpenSubTitle,
  sideItem,
}) => {
  const { Icon, linkGoTo, name, subNames } = sideItem;

  const navigate = useNavigate();

  const onOpenScreen = (name: string) => {
    if (name === "Informes") {
      setOpenSubTitle(!openSubTitle);
      return;
    }

    navigate(linkGoTo!);

    onCloseSideBar();
  };

  return (
    <li className={styles.sidebar__item} onClick={() => onOpenScreen(name)}>
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
