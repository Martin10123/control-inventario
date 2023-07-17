import { BiCategoryAlt } from "react-icons/bi";
import { BsCardList, BsMenuDown, BsGraphUpArrow } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineBookmarks } from "react-icons/md";
import {
  TbPresentationAnalytics,
  TbDeviceAnalytics,
  TbUsersGroup,
} from "react-icons/tb";
import { LiaChartPieSolid } from "react-icons/lia";
import { LuTags } from "react-icons/lu";

export const sideBarItem = [
  { name: "Inicio", Icon: <IoHomeOutline /> },
  { name: "Usuarios", Icon: <TbUsersGroup /> },
  { name: "Proveedor", Icon: <BsCardList /> },
  { name: "Categorias", Icon: <BiCategoryAlt /> },
  { name: "Productos", Icon: <MdOutlineBookmarks /> },
  { name: "Perfiles", Icon: <BsMenuDown /> },
  {
    name: "Informes",
    Icon: <CgFileDocument />,
    subNames: [
      { nameSub: "Balance general", IconSub: <LiaChartPieSolid /> },
      {
        nameSub: "Comprobantes de ingresos",
        IconSub: <TbPresentationAnalytics />,
      },
      { nameSub: "Reporte de devoluciones", IconSub: <TbDeviceAnalytics /> },
      { nameSub: "Reporte de ventas", IconSub: <BsGraphUpArrow /> },
    ],
  },
  { name: "Existencias por bodega", Icon: <LuTags /> },
];
