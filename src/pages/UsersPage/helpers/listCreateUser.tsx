import { BsPhone, BsTelephone } from "react-icons/bs";
import {
  HiOutlineIdentification,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { LiaBirthdayCakeSolid, LiaBusinessTimeSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { InterCreateUser } from "../interfaces";

export const listCreateUser: InterCreateUser[] = [
  {
    Icon: <HiOutlineIdentification />,
    name: "idDocumentJP",
    placeholderJu: "803940343...",
    placeholderNa: "1002567890...",
    titleLabelJ: "Nit",
    titleLabelP: "Documento",
    type: "number",
  },
  {
    Icon: <SlUser />,
    name: "nameJP",
    placeholderJu: "Empresa san alonso...",
    placeholderNa: "Raul Daniel...",
    titleLabelJ: "Nombre comercial",
    titleLabelP: "Nombre completo",
    type: "text",
  },
  {
    Icon: <LiaBusinessTimeSolid />,
    name: "businessName",
    placeholderJu: "¿Como se identifican?...",
    titleLabelJ: "Razón social",
    titleLabelP: "",
    type: "text",
  },
  {
    Icon: <LiaBirthdayCakeSolid />,
    name: "birthdayUser",
    titleLabelJ: "Fecha creación",
    titleLabelP: "Fecha de nacimiento",
    type: "date",
  },
  {
    Icon: <MdAlternateEmail />,
    name: "emailAdress",
    placeholderJu: "Carlos3563@empresax.com...",
    placeholderNa: "Raul10384.perezgmail.com...",
    titleLabelJ: "Correo empresarial",
    titleLabelP: "Correo",
    type: "email",
  },
  {
    Icon: <HiOutlineLocationMarker />,
    name: "adressLocation",
    placeholderJu: "Cartagena - calle #34-26...",
    placeholderNa: "Cartagena - calle #24-33...",
    titleLabelJ: "Ubicación",
    titleLabelP: "Dirección",
    type: "text",
  },
  {
    Icon: <BsTelephone />,
    name: "phoneHouse",
    placeholderJu: "605 675 0000...",
    placeholderNa: "605 675 0000...",
    titleLabelJ: "Telefono",
    titleLabelP: "Telefono",
    type: "tel",
  },
  {
    Icon: <BsPhone />,
    name: "cellPhone",
    placeholderJu: "300 000 0000...",
    placeholderNa: "300 000 0000...",
    titleLabelJ: "Celular",
    titleLabelP: "Celular",
    type: "number",
  },
];
