import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { PropsSideItem } from "../../interfaces/interfaces";

import styles from "./stylesComp.module.css";

export const SideItem = ({ listData, onCloseSideBar }: PropsSideItem) => {
  const [showSubMenus, setShowSubMenus] = useState(false);
  const navigate = useNavigate();
  const { Icon, isSubMenu, linkGoTo, titleItem, subMenus } = listData;
  const showSubMenuVari = showSubMenus ? "sidebar__in" : "sidebar__close";

  const onSubMenuClick = () => {
    setShowSubMenus((prevShowSubMenus) => !prevShowSubMenus);
  };

  const onGoToLink = () => {
    if (linkGoTo) {
      navigate(linkGoTo);
      onCloseSideBar();
    } else {
      onSubMenuClick();
    }
  };

  return (
    <>
      <li className={styles.sb__item} onClick={onGoToLink}>
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
              <SideItem
                key={subMenu.titleItem}
                listData={subMenu}
                onCloseSideBar={onCloseSideBar}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
