import { sideBarItem } from "../../helper";
import { PropsSideBar } from "../../interfaces/interfaces";
import { SideInfoUser, SideItem } from "../components";

import styles from "./sideBar.module.css";

export const Sidebar = ({ openSidebar, setOpenSidebar }: PropsSideBar) => {
  const styleAnimite = openSidebar ? "fadeInLeft" : "zoomOutLeft";

  const onCloseSideBar = () => {
    setOpenSidebar(false);
  };

  return (
    <aside
      className={`${styles.sb__container} animate__animated animate__${styleAnimite}`}
    >
      <div className={styles.sb__content}>
        <SideInfoUser onCloseSideBar={onCloseSideBar} />

        <div className={styles.sb__content_sidebar}>
          <h2>MENU</h2>

          <ul className={styles.sb__list_items}>
            {sideBarItem.map((item) => (
              <SideItem key={item.titleItem} listData={item} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
