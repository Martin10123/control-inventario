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
import { LuSettings, LuTags } from "react-icons/lu";

export const sideBarItem = [
  { Icon: <IoHomeOutline />, linkGoTo: "/", name: "Inicio" },
  { Icon: <TbUsersGroup />, linkGoTo: "/users", name: "Usuarios" },
  { Icon: <BsCardList />, linkGoTo: "/supplier", name: "Tienda" },
  { Icon: <MdOutlineBookmarks />, linkGoTo: "/products", name: "Productos" },
  { Icon: <BsMenuDown />, linkGoTo: "profiles", name: "Perfiles" },
  {
    Icon: <CgFileDocument />,
    name: "Informes",
    subNames: [
      {
        IconSub: <LiaChartPieSolid />,
        linkGoTo: "/reports/balanceSheet",
        nameSub: "Balance general",
      },
      {
        IconSub: <TbPresentationAnalytics />,
        linkGoTo: "/reports/proofIncome",
        nameSub: "Comprobantes de ingresos",
      },
      {
        IconSub: <TbDeviceAnalytics />,
        linkGoTo: "/reports/returnsReport",
        nameSub: "Reporte de devoluciones",
      },
      {
        IconSub: <BsGraphUpArrow />,
        linkGoTo: "/reports/salesReport",
        nameSub: "Reporte de ventas",
      },
    ],
  },
  { Icon: <LuTags />, linkGoTo: "/warehouse", name: "Existencias por bodega" },
];
