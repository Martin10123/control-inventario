import { LayoutPages } from "../Layout";
import { ImProfile } from "react-icons/im";

export const ProfilesPage = () => {
  return (
    <LayoutPages
      firstTitle="Perfiles"
      Icon={<ImProfile />}
      placeholderInput="Buscar un perfil"
      secondTitle="Listado de perfiles"
    >
      <h1>ProfilesPage</h1>
    </LayoutPages>
  );
};
