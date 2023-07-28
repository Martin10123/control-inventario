import { useState } from "react";

import { LayoutPages } from "../Layout";
import { ImProfile } from "react-icons/im";
import { CreateProfile } from "./components/CreateProfile";
import { Table } from "../../components";
import { columnsProfiles, profiles } from "../helpers";

export const ProfilesPage = () => {
  const [openCreateProfile, setOpenCreateProfile] = useState(false);

  const onOpenAddNewProfile = () => {
    setOpenCreateProfile(!openCreateProfile);
  };

  return (
    <>
      <LayoutPages
        firstTitle="Perfiles"
        Icon={<ImProfile />}
        placeholderInput="Buscar un perfil"
        secondTitle="Listado de perfiles"
        onOpenAddNew={onOpenAddNewProfile}
      >
        <Table dataColumns={columnsProfiles} mockData={profiles} />
      </LayoutPages>

      <CreateProfile
        onOpenAddNewProfile={onOpenAddNewProfile}
        openCreateProfile={openCreateProfile}
      />
    </>
  );
};
