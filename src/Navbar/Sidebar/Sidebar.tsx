import { useState } from "react";
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
  const styleAnimite = openSidebar ? "slideInUp" : "slideOutDown";

  return (
    <nav
      className={`${styles.sidebar__container} animate__animated animate__${styleAnimite}`}
    >
      <div className={styles.sidebar__content}>
        <SideInfoUser setOpenSidebar={setOpenSidebar} />

        <h4 className={styles.sidebar__title_list}>MENU</h4>

        <ul className={styles.sidebar__list_item}>
          {sideBarItem.map(({ name, Icon, subNames }) => (
            <div key={name}>
              <SideItem
                Icon={Icon}
                name={name}
                openSubTitle={openSubTitle}
                setOpenSubTitle={setOpenSubTitle}
                subNames={subNames!}
              />

              <SideSubItem openSubTitle={openSubTitle} subNames={subNames!} />
            </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};
