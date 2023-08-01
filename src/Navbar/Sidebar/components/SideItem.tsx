import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { PropsSideBar } from "../../interfaces/interfaces";

import styles from "./stylesComp.module.css";

export const SideItem = ({ listData }: PropsSideBar) => {
  const [showSubMenus, setShowSubMenus] = useState(false);
  const { Icon, isSubMenu, linkGoTo, titleItem, subMenus } = listData;
  const showSubMenuVari = showSubMenus ? "sidebar__in" : "sidebar__close";

  const onSubMenuClick = () => {
    setShowSubMenus((prevShowSubMenus) => !prevShowSubMenus);
  };

  return (
    <>
      <li className={styles.sb__item} onClick={onSubMenuClick}>
        <span className={styles.sb__item_info}>
          {Icon}
          <p>{titleItem}</p>
        </span>

        {isSubMenu && (
          <span className={styles.sb__icon_dropdown}>
            {showSubMenus ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
          </span>
        )}
      </li>

      {subMenus && (
        <div className={`${styles.sb__component_recursive} ${showSubMenuVari}`}>
          <ul className={styles.sb__sub_menu}>
            {subMenus.map((subMenu) => (
              <SideItem key={subMenu.titleItem} listData={subMenu} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
