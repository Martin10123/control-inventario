import { Fragment, useState } from "react";
import { sideBarItem } from "../../helpers";
import { SideItem } from "./SideItem";
import { SideSubItem } from "./SideSubItem";
import { SideInfoUser } from "./SideInfoUser";

import styles from "./sideBar.module.css";

export interface SidebarClose {
  openSidebar?: boolean;
  setOpenSidebar: (v: boolean) => void;
}

export const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarClose) => {
  const [openSubTitle, setOpenSubTitle] = useState(false);
  const styleAnimite = openSidebar ? "fadeInLeft" : "zoomOutLeft";

  const onCloseSideBar = () => {
    setOpenSidebar(false);
  };

  return (
    <nav
      className={`${styles.sidebar__container} animate__animated animate__${styleAnimite}`}
    >
      <div className={styles.sidebar__content}>
        <SideInfoUser onCloseSideBar={onCloseSideBar} />

        <h4 className={styles.sidebar__title_list}>MENU</h4>

        <div className={styles.sidebar__list_item}>
          {sideBarItem.map((sideItem) => (
            <Fragment key={sideItem.name}>
              <SideItem
                onCloseSideBar={onCloseSideBar}
                openSubTitle={openSubTitle}
                setOpenSubTitle={setOpenSubTitle}
                sideItem={sideItem}
              />

              <SideSubItem
                linkGoTo={sideItem.linkGoTo!}
                onCloseSideBar={onCloseSideBar}
                openSubTitle={openSubTitle}
                subNames={sideItem.subNames!}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};
