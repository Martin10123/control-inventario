import { BiCurrentLocation } from "react-icons/bi";
import { BsPhone, BsTelephone } from "react-icons/bs";
import {
  HiOutlineIdentification,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { SlUser } from "react-icons/sl";

interface interCreateUser {
  Icon: JSX.Element;
  name: string;
  placeholder: string;
  type: string;
}

export const listCreateUser: interCreateUser[] = [
  {
    Icon: <HiOutlineIdentification />,
    name: "idDocument",
    placeholder: "Identificación...",
    type: "number",
  },
  {
    Icon: <SlUser />,
    name: "nameUser",
    placeholder: "Nombre...",
    type: "text",
  },
  {
    Icon: <SlUser />,
    name: "lastName",
    placeholder: "Apellido...",
    type: "text",
  },
  {
    Icon: <LiaBirthdayCakeSolid />,
    name: "birthdayUser",
    placeholder: "Identificación...",
    type: "date",
  },
  {
    Icon: <MdAlternateEmail />,
    name: "emailUser",
    placeholder: "Email...",
    type: "email",
  },
  {
    Icon: <HiOutlineLocationMarker />,
    name: "adressUser",
    placeholder: "Dirección...",
    type: "text",
  },
  {
    Icon: <BsTelephone />,
    name: "phoneHouse",
    placeholder: "Telefono...",
    type: "number",
  },
  {
    Icon: <BsPhone />,
    name: "cellPhone",
    placeholder: "Celular...",
    type: "tel",
  },
];
