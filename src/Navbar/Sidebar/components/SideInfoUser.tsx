import { IoIosArrowBack } from "react-icons/io";
import { photoUser } from "../../../assets";

import styles from "./stylesComp.module.css";

interface PropsUser {
  onCloseSideBar: () => void;
}

export const SideInfoUser = ({ onCloseSideBar }: PropsUser) => {
  return (
    <div className={styles.sb__info_user_active}>
      <figure className={styles.sb__photo_user}>
        <img src={photoUser} alt="Foto de perfil del usuario" />

        <figcaption className={styles.sb__information}>
          <p className={styles.sb__name_user}>Martin Elias</p>
          <span className={styles.sb__status}>En linea</span>
        </figcaption>
      </figure>

      <IoIosArrowBack onClick={onCloseSideBar} />
    </div>
  );
};
