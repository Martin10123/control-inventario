import { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";

import { PiUserCircle } from "react-icons/pi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { TbDeviceAnalytics, TbPresentationAnalytics } from "react-icons/tb";

import { photoUser } from "../../assets";
import { BarChart, DropDown, Sidebar } from "../../components";

import styles from "./mainPage.module.css";

export const MainPage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const data = [30, 50, 70, 40, 90];
  const labels = ["Barra 1", "Barra 2", "Barra 3", "Barra 4", "Barra 5"];
  const title = "Gráfico de barras";

  return (
    <main className={styles.main__container}>
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      <div className={styles.main__content}>
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

        <div className={styles.main__info_about_page}>
          <div className={styles.main__content_title_welcome}>
            <h1 className={styles.main__title_welcome}>Bienvenidos</h1>
            <p>Control de inventarios</p>
          </div>

          <div className={styles.main__content_list_cards}>
            <div className={styles.main__list_cards}>
              <div className={styles.main__container_card}>
                <span className={styles.main__content_icon}>
                  <TbPresentationAnalytics />
                </span>
                <div className={styles.main__content_info}>
                  <p>Comprobantes de ingresos</p>

                  <button className={styles.main__btn_getinto}>Ingresar</button>
                </div>
              </div>
              <div className={styles.main__container_card}>
                <span className={styles.main__content_icon}>
                  <BsGraphUpArrow />
                </span>
                <div className={styles.main__content_info}>
                  <p>Registrar ventas</p>
                  <button className={styles.main__btn_getinto}>Ingresar</button>
                </div>
              </div>
              <div className={styles.main__container_card}>
                <span className={styles.main__content_icon}>
                  <TbDeviceAnalytics />
                </span>
                <div className={styles.main__content_info}>
                  <p>Devoluciones</p>
                  <button className={styles.main__btn_getinto}>Ingresar</button>
                </div>
              </div>
              <div className={styles.main__container_card}>
                <span className={styles.main__content_icon}>
                  <PiUserCircle />
                </span>
                <div className={styles.main__content_info}>
                  <p>Clientes</p>
                  <button className={styles.main__btn_getinto}>Ingresar</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.main__container_self_weeks}>
            <div className={styles.main__content_info_chart}>
              <h2 className={styles.main__title_self_week}>Ventas semanal</h2>

              <div className={styles.main__select_option}>
                <select className={styles.main__select_item}>
                  <option value="Punto de venta">Punto de venta</option>
                  <option value="Comprobantes">Comprobantes</option>
                  <option value="Bodega el toril">Bodega el toril</option>
                </select>
              </div>

              <p className={styles.main__year_now}>
                {new Date().getFullYear()}
              </p>
            </div>

            <div className={styles.main__content_grafic}>
              <p>grafico</p>
              <BarChart data={data} labels={labels} title={title} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
