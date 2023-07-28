import { useState } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";

import { CreateUser } from "./components/CreateUser";
import { LayoutPages } from "../Layout";
import { Table } from "../../components";
import { columnsUsers, users } from "../helpers";

export const UsersPage = () => {
  const [openCreateUsers, setOpenCreateUsers] = useState(false);

  const onOpenAddNewUser = () => {
    setOpenCreateUsers(!openCreateUsers);
  };

  return (
    <>
      <LayoutPages
        firstTitle="Usuarios"
        Icon={<HiOutlineViewGridAdd />}
        onOpenAddNew={onOpenAddNewUser}
        placeholderInput="Buscar un usuario..."
        secondTitle="Lista de usuarios"
      >
        <Table dataColumns={columnsUsers} mockData={users} />
      </LayoutPages>

      <CreateUser
        onOpenAddNewUser={onOpenAddNewUser}
        openCreateUsers={openCreateUsers}
      />
    </>
  );
};
