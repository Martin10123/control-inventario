import { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { photoUser } from "../../assets";
import { Sidebar } from "../../components";

import styles from "./mainPage.module.css";

export const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main className={styles.main__container}>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className={styles.main__content}>
        <header className={styles.main__header}>
          <HiOutlineViewGridAdd onClick={() => setOpenSidebar(true)} />

          <figure className={styles.main__photo_profile}>
            <img src={photoUser} alt="Foto de perfil" width="100%" />
          </figure>
        </header>
      </div>
    </main>
  );
};
