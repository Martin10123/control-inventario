import { useState } from "react";
import { CreateUser } from "./components/CreateUser";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { LayoutPages } from "../Layout";

import styles from "./usersPage.module.css";

export const UsersPage = () => {
  const [openCreateUsers, setOpenCreateUsers] = useState(false);

  const onOpenAddNewUser = () => {
    setOpenCreateUsers(true);
  };

  return (
    <LayoutPages
      firstTitle="Usuarios"
      Icon={<HiOutlineViewGridAdd />}
      onOpenAddNew={onOpenAddNewUser}
      placeholderInput="Buscar un usuario..."
      secondTitle="Lista de usuarios"
    >
      <div className={styles.up__table_with_users}>
        <h1>table</h1>
      </div>

      <CreateUser
        openCreateUsers={openCreateUsers}
        setOpenCreateUsers={setOpenCreateUsers}
      />
    </LayoutPages>
  );
};
