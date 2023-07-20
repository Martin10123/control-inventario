import { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { photoUser } from "../../assets";
import { DropDown, Sidebar } from "..";

import styles from "./header.module.css";

export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <header className={styles.main__header}>
        <HiOutlineViewGridAdd onClick={() => setOpenSidebar(true)} />

        <figure
          className={styles.main__photo_profile}
          onClick={() => setOpenDropDown(true)}
        >
          <img src={photoUser} alt="Foto de perfil" width="100%" />
        </figure>

        {openDropDown && <DropDown setOpenDropDown={setOpenDropDown} />}
      </header>

      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};
