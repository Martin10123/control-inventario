import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { InputForm } from "../../components";
import { CreateUser } from "./components/CreateUser";

import styles from "./usersPage.module.css";

export const UsersPage = () => {
  const [openCreateUsers, setOpenCreateUsers] = useState(false);

  return (
    <section className={styles.up__container}>
      <div className={styles.up__content}>
        <div className={styles.up__title_page}>
          <h2>Usuarios</h2>
        </div>

        <div className={styles.up__content_info_section}>
          <div className={styles.up__title_info_and_create_user}>
            <p>Lista de usuarios</p>
            <HiOutlineViewGridAdd onClick={() => setOpenCreateUsers(true)} />
          </div>

          <div className={styles.up__content_table}>
            <InputForm
              icon={<BiSearchAlt />}
              name="searchUser"
              placeholder="Buscar usuario..."
              type="text"
              stylesCInputF={{
                boxShadow: "0px 2px 7px #00c0e838",
              }}
            />

            <div className={styles.up__table_with_users}>
              <h1>table</h1>
            </div>
          </div>
        </div>
      </div>

      <CreateUser
        openCreateUsers={openCreateUsers}
        setOpenCreateUsers={setOpenCreateUsers}
      />
    </section>
  );
};
