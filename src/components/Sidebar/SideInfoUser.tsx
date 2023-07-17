import { IoIosArrowBack } from "react-icons/io";
import { photoUser } from "../../assets";
import { SidebarClose } from "..";

import styles from "./sideBar.module.css";

export const SideInfoUser = ({ setOpenSidebar }: SidebarClose) => {
  return (
    <div className={styles.sidebar__content_info_user}>
      <div className={styles.sidebar__info_user_and_arrow_back}>
        <figure className={styles.sidebar__photo_user}>
          <img src={photoUser} alt="Foto de perfil del usuario" />
        </figure>

        <span className={styles.sidebar__content_displayname}>
          <p className={styles.sidebar__displayName}>Martin Elias</p>
          <p className={styles.sidebar__active}>En linea</p>
        </span>
      </div>

      <IoIosArrowBack onClick={() => setOpenSidebar(false)} />
    </div>
  );
};
